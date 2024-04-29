import time
import random
history = {}

def showHistory():
    print(history)

def startGame():
    min_num = int(input('input min number: '))
    max_num = int(input('input max number: '))
    target = int(random.random()*(max_num-min_num) + min_num)
    print(target)
    now_time = str(time.time())
    while True:
        guess = int(input('guess: '))
        if not history.get(now_time):
            history[now_time] = []
        history[now_time].append(guess)
        flag = guess == target
        if flag:
            print('correct!')
            break
        print('less than target!' if guess < target else 'greater than target')
    
def exitGame():
    exit()
    
def default():
    pass

while True:
    print('==================\n1.history\n2.start\n3.exit')
    opts = { '1': showHistory, '2': startGame, '3': exitGame}
    opt = input('select opt: ')
    opts.get(opt, default)()
