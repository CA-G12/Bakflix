let dom = require("../public/js/dom.js");

describe("Testing createElemets", () => {
    test("Should create element ", () => {
        expect(dom.createElemets(mainDiv, "img", "http://example.com")).toEqual({ id: 2, name: "khalil" });
    });
});
