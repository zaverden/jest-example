describe("module", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.unmock("../dependency");
  });

  test("1 - manual", () => {
    jest.doMock("../dependency");
    expect(require("../module")).toBe("manual");
  });

  test("2 - fabric", () => {
    jest.doMock("../dependency", () => () => "fabric");
    expect(require("../module")).toBe("fabric");
  });

  test("3 - manual", () => {
    jest.doMock("../dependency");
    expect(require("../module")).toBe("manual");
  });

  test("4 - real", () => {
    expect(require("../module")).toBe("real");
  });
});
