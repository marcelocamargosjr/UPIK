import { LikesStorage } from "../types/likesTypes";

export class LikesController {
  private likes: LikesStorage;

  constructor() {
    this.likes = {};
  }

  public addLike(imageId: string): number {
    if (!this.likes[imageId]) {
      this.likes[imageId] = 0;
    }
    this.likes[imageId]++;
    return this.likes[imageId];
  }

  public getLikes(imageId: string): number {
    return this.likes[imageId] || 0;
  }
}
