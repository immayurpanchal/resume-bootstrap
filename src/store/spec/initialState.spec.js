import initialState from "../initialState";

describe("initialState > ", () => {
  it("execute emptyInitialState", () => {
    expect(initialState).not.toBe(null);
  });
});
