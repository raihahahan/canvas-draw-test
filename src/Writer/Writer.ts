import { Canvas, CanvasRenderingContext2D, createCanvas } from "canvas";
import fs from "fs";
import { folderPath } from "../config";
import IWriter from "./IWriter";

class Writer implements IWriter {
  private defaults = {
    width: 200,
    height: 200,
    lineWidth: 2,
  };

  private canvas: Canvas;
  private ctx: CanvasRenderingContext2D;
  private dir: "N" | "S" | "E" | "W";
  private coords: { x: number; y: number };
  private penUp: boolean;

  constructor(width?: number, height?: number, lineWidth?: number) {
    this.dir = "N";
    this.canvas = createCanvas(
      width ?? this.defaults.width,
      height ?? this.defaults.height
    );
    this.ctx = this.canvas.getContext("2d");
    this.ctx.lineWidth = lineWidth ?? this.defaults.lineWidth;
    this.coords = { x: 10, y: width ? width - 10 : this.defaults.width - 10 }; // provide padding of 10 px
    this.ctx.moveTo(this.coords.x, this.coords.y);

    this.penUp = false;
  }

  public FD(steps: number): void {
    const advance = (x: number, y: number) =>
      this.penUp ? this.ctx.moveTo(x, y) : this.ctx.lineTo(x, y);

    switch (this.dir) {
      case "N":
        this.coords.y -= steps;
        advance(this.coords.x, this.coords.y);
        break;
      case "S":
        this.coords.y += steps;
        advance(this.coords.x, this.coords.y);
        break;
      case "E":
        this.coords.x += steps;
        advance(this.coords.x, this.coords.y);
        break;
      case "W":
        this.coords.x -= steps;
        advance(this.coords.x, this.coords.y);
        break;
      default:
        break;
    }

    this.ctx.stroke();
  }

  public PU(): void {
    this.penUp = true;
  }

  public PD(): void {
    this.penUp = false;
  }

  public LT(): void {
    switch (this.dir) {
      case "N":
        this.dir = "W";
        break;
      case "S":
        this.dir = "E";
        break;
      case "E":
        this.dir = "N";
        break;
      case "W":
        this.dir = "S";
        break;
      default:
        break;
    }
  }

  public RT(): void {
    switch (this.dir) {
      case "N":
        this.dir = "E";
        break;
      case "S":
        this.dir = "W";
        break;
      case "E":
        this.dir = "S";
        break;
      case "W":
        this.dir = "N";
        break;
      default:
        break;
    }
  }

  public REPEAT(freq: number, stepsFunc: () => void) {
    for (let i = 0; i < freq; i++) {
      stepsFunc();
    }
  }

  public save(): void {
    const buffer = this.canvas.toBuffer();
    const fileName = Date.now() + "-canvas.png";
    const finalPath = folderPath + "/" + fileName;
    fs.writeFileSync(finalPath, buffer);
    console.log("Saved at " + finalPath);
  }

  public getWriterProps() {
    return {
      dir: this.dir,
      coords: this.coords,
      penUp: this.penUp,
    };
  }
}

export default Writer;
