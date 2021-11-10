input.onButtonPressed(Button.A, function () {
    if (paddleA.get(LedSpriteProperty.X) > 0) {
        paddleA.change(LedSpriteProperty.X, -1)
        paddleB.change(LedSpriteProperty.X, -1)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (paddleA.get(LedSpriteProperty.X) > 0) {
        paddleA.change(LedSpriteProperty.X, -1)
        paddleB.change(LedSpriteProperty.X, -1)
    }
})
input.onGesture(Gesture.SixG, function () {
    if (paddleA.get(LedSpriteProperty.X) > 0) {
        paddleA.change(LedSpriteProperty.Y, 1)
        paddleB.change(LedSpriteProperty.Y, 1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (paddleA.get(LedSpriteProperty.X) < 3) {
        paddleA.change(LedSpriteProperty.X, 1)
        paddleB.change(LedSpriteProperty.X, 1)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    if (paddleA.get(LedSpriteProperty.X) < 3) {
        paddleA.change(LedSpriteProperty.X, 1)
        paddleB.change(LedSpriteProperty.X, 1)
    }
})
input.onGesture(Gesture.ThreeG, function () {
    if (paddleA.get(LedSpriteProperty.X) > 0) {
        paddleA.change(LedSpriteProperty.Y, -1)
        paddleB.change(LedSpriteProperty.Y, -1)
    }
})
let paddleB: game.LedSprite = null
let paddleA: game.LedSprite = null
game.setScore(0)
paddleA = game.createSprite(2, 4)
paddleB = game.createSprite(3, 4)
let Ball = game.createSprite(randint(0, 4), 0)
let directionY = 1
let directionX = randint(-1, 1)
basic.pause(500)
music.playMelody("E D G F B A C5 B ", 163)
basic.forever(function () {
    Ball.change(LedSpriteProperty.X, directionX)
    Ball.change(LedSpriteProperty.Y, directionY)
    if (Ball.isTouching(paddleA) || Ball.isTouching(paddleB)) {
        Ball.change(LedSpriteProperty.X, directionX * -1)
        Ball.change(LedSpriteProperty.Y, -1)
        directionY = -1
        directionX = randint(-1, 1)
    } else {
        if (Ball.get(LedSpriteProperty.Y) <= 0) {
            directionY = 1
            directionX = randint(-1, 1)
        } else if (Ball.get(LedSpriteProperty.Y) >= 4) {
            Ball.set(LedSpriteProperty.Blink, 1)
            basic.pause(2000)
            game.gameOver()
        }
        if (Ball.get(LedSpriteProperty.X) <= 0) {
            directionX = 1
        } else if (Ball.get(LedSpriteProperty.X) >= 4) {
            directionX = -1
        }
        basic.pause(500)
    }
})
