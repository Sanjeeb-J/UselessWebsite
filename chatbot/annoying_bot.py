
import random

class AnnoyingBot:
    def __init__(self):
        self.responses = [
            "Why are you even asking me?",
            "Oh, really? I don't care.",
            "Do you ever stop talking?",
            "Maybe ask someone else... like Google?",
            "What am I, a genius? Figure it out yourself!",
            "You think I'm listening? Try harder.",
            "That's the worst question I've ever heard.",
            "Whatever, it's not like I care.",
            "You're STILL talking? I'm done."
        ]

    def get_response(self, user_input):
        # Respond with a random annoying message
        return random.choice(self.responses)
