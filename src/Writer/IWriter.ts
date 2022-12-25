interface IWriter {
  FD(steps: number): void;
  PU(): void;
  PD(): void;
  LT(): void;
  RT(): void;
}

export default IWriter;
