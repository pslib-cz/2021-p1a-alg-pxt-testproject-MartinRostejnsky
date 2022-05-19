basic.show_icon(IconNames.HEART)
i = 0
def on_forever():
    global i
    i += 1
    if i % 2 == 0: 
        basic.show_icon(IconNames.HEART)
    else:
        basic.show_icon(IconNames.NO)
basic.forever(on_forever)
