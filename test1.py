import os
import sys

def get_user(id):
    return users[id]

def calc(x, y):
    result = x + y
    return result

def login(username, password):
    query = "SELECT * FROM users WHERE name='" + username + "' AND pass='" + password + "'"
    cursor.execute(query)

def read_file(path):
    f = open(path, 'r')
    data = f.read()
    return data

def find_duplicate(items):
    for i in range(len(items)):
        for j in range(len(items)):
            if i != j and items[i] == items[j]:
                return items[i]
    return None

def process_data(data=[]):
    data.append(1)
    return data

def divide(a, b):
    return a / b

class user_manager:
    def __init__(self):
        self.Users = []
    def AddUser(self, name):
        self.Users.append(name)
