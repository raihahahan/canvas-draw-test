import Writer from "./Writer/Writer";

function main() {
  thirdExampleD();
}

function firstExample() {
  const writer = new Writer(200, 200, 2);
  writer.PD();
  writer.FD(30);
  writer.PU();
  writer.FD(10);
  writer.PD();
  writer.FD(50);
  writer.PU();
  writer.FD(10);
  writer.PD();
  writer.FD(10);
  writer.save();
}

function secondExample() {
  const writer = new Writer(200, 200, 4);
  writer.PD();
  const funcToRepeat = () => {
    writer.FD(50);
    writer.RT();
    writer.FD(50);
    writer.LT();
  };

  writer.REPEAT(2, funcToRepeat);
  writer.save();
}

function thirdExampleA() {
  const writer = new Writer(200, 200, 4);
  const FD = writer.FD.bind(writer);
  const PU = writer.PU.bind(writer);
  const PD = writer.PD.bind(writer);
  const LT = writer.LT.bind(writer);
  const RT = writer.RT.bind(writer);
  const save = writer.save.bind(writer);
  const REPEAT = writer.REPEAT.bind(writer);
  REPEAT(3, () => {
    FD(60);
    RT();
    FD(60);
    RT();
    PU();
    FD(30);
    RT();
    FD(30);
    LT();
    PD();
  });
  save();
}

function thirdExampleB() {
  const writer = new Writer(200, 200, 4);
  const FD = writer.FD.bind(writer);
  const PU = writer.PU.bind(writer);
  const PD = writer.PD.bind(writer);
  const LT = writer.LT.bind(writer);
  const RT = writer.RT.bind(writer);
  const save = writer.save.bind(writer);
  const REPEAT = writer.REPEAT.bind(writer);
  REPEAT(3, () => {
    REPEAT(2, () => {
      FD(60);
      RT();
      LT();
    });
    FD(30);
    RT();
    FD(30);
    LT();
    PD();
  });
  save();
}

function thirdExampleC() {
  const writer = new Writer(200, 200, 4);
  const FD = writer.FD.bind(writer);
  const PU = writer.PU.bind(writer);
  const PD = writer.PD.bind(writer);
  const LT = writer.LT.bind(writer);
  const RT = writer.RT.bind(writer);
  const save = writer.save.bind(writer);
  const REPEAT = writer.REPEAT.bind(writer);

  REPEAT(3, () => {
    REPEAT(4, () => {
      FD(60);
      RT();
      LT();
    });
    FD(30);
    RT();
    FD(30);
    LT();
    PD();
  });
  save();
}

function thirdExampleD() {
  const writer = new Writer(200, 200, 4);
  const FD = writer.FD.bind(writer);
  const PU = writer.PU.bind(writer);
  const PD = writer.PD.bind(writer);
  const LT = writer.LT.bind(writer);
  const RT = writer.RT.bind(writer);
  const save = writer.save.bind(writer);
  const REPEAT = writer.REPEAT.bind(writer);

  REPEAT(3, () => {
    REPEAT(4, () => {
      FD(60);
      RT();
    });
    PU();
    FD(30);
    RT();
    FD(30);
    LT();
    PD();
  });

  save();
}

function thirdExampleE() {
  const writer = new Writer(200, 200, 4);
  const FD = writer.FD.bind(writer);
  const PU = writer.PU.bind(writer);
  const PD = writer.PD.bind(writer);
  const LT = writer.LT.bind(writer);
  const RT = writer.RT.bind(writer);
  const save = writer.save.bind(writer);
  const REPEAT = writer.REPEAT.bind(writer);

  REPEAT(3, () => {
    REPEAT(4, () => {
      FD(60);
      RT();
      PU();
    });
    PU();
    FD(30);
    RT();
    FD(30);
    LT();
    PD();
  });
  save();
}

main();
