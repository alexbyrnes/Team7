from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

articles = [{"headline": "Europe weighs Greece's ability to enact austerity",
    "author": "Anthony Faiola",
    "body": "European finance ministers were locked in high-stakes talks Saturday over the fate of Greece, with the outcome set to determine whether its creditors will launch a new round of emergency negotiations on a new rescue package to prevent the Mediterranean nation's imminent financial collapse."},
    {"headline": "The Best Way to Vilify Hillary Clinton? G.O.P. Spends Heavily to Test It", 
      "author": "Asheley Parker",
      "body": "Inside an office park here, about a dozen women gathered to watch a 30-second television spot that opened with Hillary Rodham Clinton looking well-coiffed and aristocratic, toasting champagne with her tuxedoed husband, the former president, against a golden-hued backdrop."
      },
    {"headline": "Watch: the new Batman v. Superman: Dawn of Justice Comic-Con trailer",
      "author": "Alex Abad-Santos",
      "body": "This second trailer feels like a direct response to the leaked initial trailer which came with a plethora of quibbles and skepticism. There's more action, more take-your-breath-away moments, and our first look at Wonder Woman (Gal Gadot) in action"}
    ]


class articlesRead(Resource):
    def get(self):
        return articles

api.add_resource(articlesRead, '/articles')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)

