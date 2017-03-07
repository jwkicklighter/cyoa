<template>
  <div>
    <div>
      <h1>{{ content.header }}</h1>
      <h4 v-if="content.subheader">{{ content.subheader }}</h4>
      <p v-for="paragraph in content.body">{{ paragraph }}</p>

      <button v-for="btn in content.choices" v-on:click="makeChoice(btn.choice)">{{ btn.text }}</button>
    </div>
    <audio id="audioPlayer" v-bind:src="content.audio" type="audio/mpeg">

    </audio>
  </div>
</template>

<script>
export default {
  name: 'game',
  data () {
    return {
      content: loadContent(0)
    }
  },
  methods: {
    makeChoice: function (id) {
      this.content = loadContent(id)
      this.$emit('set-background', this.content.background)
      setTimeout(playAudio, 1000)
    }
  }
}

function playAudio () {
  var player = document.getElementById('audioPlayer')
  player.play()
}

function loadContent (id) {
  switch (id) {
    case 0:
      return {
        header: 'Welcome to the CYOA',
        subheader: 'An Adventure by Jordan Kicklighter',
        body: [
          ''
        ],
        choices: [
          {
            text: 'Begin',
            choice: 1
          }
        ]
      }

    case 1:
      return {
        header: 'Congratulations, you\'re a new parent!',
        body: [
          'You are the parent of a sweet little boy, only a few months old. The little guy is absolutely adorable, but unfortunately he is crying in his crib. What do you want to do?'
        ],
        audio: 'static/cry.mp3',
        choices: [
          {
            text: 'Go to his room',
            choice: 2
          },
          {
            text: 'Let him cry it out',
            choice: 3
          }
        ]
      }

    case 2:
      return {
        header: 'He looks fine',
        body: [
          'You walk to his room and check out the situation. Everything looks fine and you don’t see anything obviously wrong. What do you do now?'
        ],
        choices: [
          {
            text: 'Check his diaper',
            choice: 4
          },
          {
            text: 'Let him cry it out',
            choice: 3
          },
          {
            text: 'Check for a fever',
            choice: 5
          }
        ]
      }

    case 3:
      return {
        header: 'He gets louder',
        body: [
          'You may be a new parent, but you know that it’s best to let your child cry it out sometimes. So you leave him be for a little while.',
          'After several minute go by, you notice that your little one seems to have gotten louder. So you go back to his room to check on him. What do you do now?'
        ],
        choices: [
          {
            text: 'Take him to the doctor',
            choice: 6
          },
          {
            text: 'Let him cry it out more',
            choice: 7
          },
          {
            text: 'Check for a fever',
            choice: 5
          }
        ]
      }

    case 4:
      return {
        header: 'His diaper is clean',
        body: [
          'You take him to the changing table to have a closer look, but everything seems clean. That makes sense considering he usually sleeps through the night, but it doesn’t help explain the crying. So what now?'
        ],
        choices: [
          {
            text: 'Back to the crib',
            choice: 2
          },
          {
            text: 'Check for a fever',
            choice: 5
          }
        ]
      }

    case 5:
      return {
        header: 'Temperature of 99F',
        body: [
          'The poor guy has a temperature of 99 degrees, no wonder he’s been crying! You know that he’s been cutting teeth recently, but can you really be sure that’s the problem? There has also been a flu bug running wild, so maybe he caught that. What do you do?'
        ],
        choices: [
          {
            text: 'Give him some medicine',
            choice: 8
          },
          {
            text: 'Take him to the doctor',
            choice: 6
          }
        ]
      }

    case 6:
      return {
        header: 'He gets better, for now',
        body: [
          'You don’t want to take any chances, so you take a trip to the doctor. After all, he could have the flu.',
          'Well it turns out that his fever wasn’t serious, but the bug he found at the doctor’s office is. His fever breaks, but it comes back in a few days. Better prepare the little guy for a rough ride because he’s not just cutting teeth this time.'
        ],
        background: 'url("static/dark-gray.png")',
        choices: [
          {
            text: 'Start over',
            choice: 0
          }
        ]
      }

    case 7:
      return {
        header: 'He gets even worse',
        body: [
          'Your baby may have been loud before, but now something is definitely wrong. Before things go any further, you better take him to the emergency room. They’ll surely know what to do.'
        ],
        background: 'url("static/dark-gray.png")',
        choices: [
          {
            text: 'Start over',
            choice: 0
          }
        ]
      }

    case 8:
      return {
        header: 'Give him some medicine',
        body: [
          'You’re pretty sure that he’s going to be fine, but that doesn’t help him feel better right now. So you go to the medicine cabinet and get him a fever reducer, and just let him sweat it out.',
          'After a few hours, his fever breaks and he gets back to his normal happy self!'
        ],
        choices: [
          {
            text: 'Start over',
            choice: 0
          }
        ]
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  background-color: #87CEEB;
  border: solid #6dadc7 1px;
  border-radius: 2px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
  color: #2c3e50;
  font-weight: bold;
  font-size: 1em;
  display: inline-block;
  margin: 0 10px 20px;
  outline: none;
  padding: auto;
  position: relative;
  padding: 10px 20px;
  transition: box-shadow 0.1s ease-in-out, background-color 0.1s ease-in-out;
}

button:hover {
  background-color: #87DEFA;
  cursor: pointer;
}

button:active {
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
}
</style>
/style>
