<div style="text-align: center;">
![logo](./screenshots/xtinction-title.png)
</div>

## Background
Xtinction is a survival shooter game built with JavaScript while using canvas where the player defends themselves from waves of hostile monsters.

![starting-screen](./screenshots/xtinction-ss.png)

## Renders multiple objects in a single animation frame
``` javascript
function render() {
  if (isGameOver) {
    renderEntity(deadPlayer());
    document.addEventListener('keydown', gameOverOverlay);
  } else {
    renderEntity(Player.duckPlayer);
    document.removeEventListener('keydown', gameOverOverlay);
  }

  leftBullets.forEach( (bullet) => renderEntity(bullet));
  rightBullets.forEach( (bullet) => renderEntity(bullet));

  leftMonsters.forEach( (monster) => { renderEntity(monster); });
  rightMonsters.forEach( (monster) => { renderEntity(monster); });

  hitAnimations.forEach( (hit) => { renderEntity(hit); });
  killAnimations.forEach( (kill) => { renderEntity(kill); });
}
```
<div style="text-align: center;">
![demo](./screenshots/xtinction-demo.gif)
</div>

## Collision Detection
``` javascript
function isCollision(
  pos1X, pos1Y, size1X, size1Y,
  pos2X, pos2Y, size2X, size2Y) {
    return (
      pos1X < pos2X + size2X - 50 &&
      pos1X + size1X - 100 > pos2X &&
      pos1Y < pos2Y + size2Y - 70 &&
      size1X + pos1Y > pos2Y
    );
}
```
