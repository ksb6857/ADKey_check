/**
 * <아날로그 값 출력 결과>
 * 
 * - 아무 키도 안눌렸을 때: 1020
 * 
 * - A키를 눌렸을 때: 0020
 * 
 * - B키를 눌렸을 때: 4520
 * 
 * - C키를 눌렸을 때: 8920
 * 
 * - D키를 눌렸을 때: 1300
 * 
 * - E키를 눌렸을 때: 5450
 * 
 * *아무 키도 안눌렸을 때 값이 1020인데 왜 '파'음이 재생되지 않는지?
 */
OLED.init(128, 64)
basic.forever(function () {
    OLED.writeNumNewLine(pins.analogReadPin(AnalogPin.P1))
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) < 10) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (pins.analogReadPin(AnalogPin.P1) < 60) {
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (pins.analogReadPin(AnalogPin.P1) < 100) {
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (pins.analogReadPin(AnalogPin.P1) < 140) {
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (pins.analogReadPin(AnalogPin.P1) < 600) {
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
