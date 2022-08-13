screen_width = 0;
screen_height = 0;

x = 0;
y = 0;

apple = "";
appledraw = false;

speak_data = "";
to_number = 0;

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function preload()
{
  apple = loadImage("data:image/png;base64,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");
}

function voice()
{
  document.getElementById("status").innerHTML = "System is listening...";
  recognition.start();
}

recognition.onresult = function(event)
{
  var content = event.results[0][0].transcript;
  to_number = Number(content);

  if(Number.isInteger(to_number))
  {
    appledraw = true;
  }
  else
  {
    document.getElementById("status").innerHTML = "The speech was not detected as a number";
  }
    
}

function setup()
{
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;

  canvas = createCanvas(screen_width, screen_height - 150);
}

function draw()
{
  if(appledraw == true)
  {
    for(var i = 1; i <= to_number; i++)
    {
      x = Math.floor(Math.random() * (screen_width - 150));
      y = Math.floor(Math.random() * (screen_height - 150));

      image(apple, x, y, 50, 50)
    }
    document.getElementById("status").innerHTML = to_number + " apples drawn";
    appledraw = false;
  }
}