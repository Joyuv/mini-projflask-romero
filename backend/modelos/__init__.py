from flask_login import UserMixin
usuarios = {}

class User(UserMixin):
    email: str
    def __init__(self, email, nome, senha):
        self.id = email
        self.nome = nome
        self.senha = senha

    @classmethod
    def get(cls, user_id, usuarios):
        if user_id in usuarios.keys():
            nome, senha = usuarios[user_id]

            user = User(user_id, nome, senha)
            return user
        return None
