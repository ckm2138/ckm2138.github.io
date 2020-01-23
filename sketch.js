function setup() {
createCanvas(600,600); // make an HTML canvas element width x height pixels
}

function draw() {
	background(237, 203, 249);
    noStroke()
    //seconds
    s = second()
    if (s<= 15) {
      sy = map(s, 0, 15, 0, 550)
      sx = 0}
    else if (s > 15 && s<=30){
      sy = 550
      sx = map(s, 15, 30, 0, 550)} 
    else if (s > 30 && s <=45){
      sy = map(s, 30, 45, 550, 0)
      sx = 550}
    else if (45 < s){
      sy = 0
      sx = map(s, 45, 60, 550, 0)}
    fill(138, 73, 162)
    rect(sx,sy, 50, 50)
    
    //minutes
    m = minute()
    mbox = map(m, 0, 60, 255, 500)
    mpos = 300- (.5*mbox)
    fill(201, 160, 230)
    rect(mpos, mpos, mbox, mbox)
  
    fill(237, 203, 249)
    rect(175,175,252,252)
    
    //hours
    h = hour()
    hr = h%12
    hbox = map(hr, 0,12, 100, 250)
    hpos = 300 - (.5 *hbox)
    fill(163, 97, 186)
    rect(hpos, hpos, hbox,hbox )

    
}
