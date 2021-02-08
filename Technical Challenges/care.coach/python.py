activity = [(1, '@login', None),
(5, '@startVideo', 'Bob'),
(20, '@startVideo', 'Thomas'),
(66, '@stopVideo', 'Thomas'),
(70, '@startVideo', 'Lily'),
(75, '@stopVideo', 'Bob'),
(78, '@stopVideo', 'Lily'),
(100, '@logout', None),
(150, '@login', None),
(160, '@startVideo', 'Thomas'),
(205, '@stopVideo', 'Thomas'),
(210, '@logout', None) ]

# So, your challenge is to calculate both (A) the duration of this example HA's
# logged in time, e.g. the sum of all periods between '@login' and '@logout', and
def duration(items):
    time = 0
    temp = 0
    for i in items:
        if i[1] == '@login':
            temp = i[0]
        elif i[1] == '@logout':
            time += i[0] - temp
            temp = 0
    return time


# (B) the duration of this example HA's time spent simultaneously streaming video
# with two clients.
def timespent(items):
    time=0, clients = [], count = 0
    for i in items:
        if i[1] == '@startVideo':
            clients.append(i[3])
        if len(clients)==2:
            time = i[0]
        if i[1] == '@stopVideo' and i[2].includes(clients):
            count -=1


