import { LikesController } from "../../src/controllers/likesController";

describe("LikesController", () => {
  let likesController: LikesController;

  beforeEach(() => {
    likesController = new LikesController();
  });

  test("Initial likes count should be zero for any image", () => {
    expect(likesController.getLikes("123")).toBe(0);
  });

  test("Adding a like should increase the count", () => {
    likesController.addLike("123");
    expect(likesController.getLikes("123")).toBe(1);
  });

  test("Adding multiple likes should accumulate the count", () => {
    likesController.addLike("123");
    likesController.addLike("123");
    expect(likesController.getLikes("123")).toBe(2);
  });
});
