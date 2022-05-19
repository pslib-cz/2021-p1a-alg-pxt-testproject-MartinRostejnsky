basic.showIcon(IconNames.Heart)
let i = 0
basic.forever(function on_forever() {
    
    i += 1
    if (i % 2 == 0) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.No)
    }
    
})
