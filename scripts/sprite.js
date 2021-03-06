class Sprite {
  constructor(url, srcPos, srcSize, canvasPos, canvasSize, speed, frames, timed) {
    this.url = url;
    this.srcPos = srcPos;
    this.srcSize = srcSize;
    this.canvasPos = canvasPos;
    this.canvasSize = canvasSize;
    this.speed = typeof speed === 'number' ? speed : 0;
    this.frames = frames;
    this.frameIdx = 0;
    this.timed = timed;
    this.isDone = false;
  }


  updateAnimation(timeDifferential) {
    this.frameIdx += this.speed * timeDifferential;
  }

  render(ctx) {
    let frame;

    if (this.speed > 0) {
      let allFrames = this.frames.length;
      let idx = Math.floor(this.frameIdx);
      frame = this.frames[idx % allFrames];

      if (idx >= this.frames.length) {
        this.isDone = true;
      }
    } else {
      frame = 0;
    }


    let x = this.srcPos[0];
    x += frame * this.srcSize[0];

    let newImage = new Image(this.srcSize[0], this.srcSize[1]);
    newImage.src = this.url;

    if (!this.timed) {
      ctx.drawImage(
        newImage,
        x, this.srcPos[1],
        this.srcSize[0], this.srcSize[1],
        this.canvasPos[0], this.canvasPos[1],
        this.canvasSize[0], this.canvasSize[1]);
    } else if (this.timed && !this.isDone) {
      ctx.drawImage(
        newImage,
        x, this.srcPos[1],
        this.srcSize[0], this.srcSize[1],
        this.canvasPos[0], this.canvasPos[1],
        this.canvasSize[0], this.canvasSize[1]);
    }
  }
}

export default Sprite;
