// Content
      var min7Chords = ["A-7","B&#9837;-7","B-7","C-7","D&#9837;-7","D-7","E&#9837;-7","E-7","F-7","G&#9837;-7","G-7","A&#9837;-7"];
      var maj7Chords = ["A&#916;7","B&#9837;&#916;7","B&#916;7","C&#916;7","D&#9837;&#916;7","D&#916;7","E&#9837;&#916;7","E&#916;7","F&#916;7","G&#9837;&#916;7","G&#916;7","A&#9837;&#916;7"];
      var dom7Chords = ["A7","B&#9837;7","B7","C7","D&#9837;7","D7","E&#9837;7","E7","F7","G&#9837;7","G7","A&#9837;7"];
      var halfdimChords = ["A<sup>&#8709;</sup>7","B&#9837;<sup>&#8709;</sup>7","B<sup>&#8709;</sup>7","C<sup>&#8709;</sup>7","D&#9837;<sup>&#8709;</sup>7","D<sup>&#8709;</sup>7","E&#9837;<sup>&#8709;</sup>7","E<sup>&#8709;</sup>7","F<sup>&#8709;</sup>7","G&#9837;<sup>&#8709;</sup>7","G<sup>&#8709;</sup>7","A&#9837;<sup>&#8709;</sup>7"];
      var dimChords = ["A<sup>&#927;</sup>7","B&#9837;<sup>&#927;</sup>7","B<sup>&#927;</sup>7","C<sup>&#927;</sup>7","D&#9837;<sup>&#927;</sup>7","D<sup>&#927;</sup>7","E&#9837;<sup>&#927;</sup>7","E<sup>&#927;</sup>7","F<sup>&#927;</sup>7","G&#9837;<sup>&#927;</sup>7","G<sup>&#927;</sup>7","A&#9837;<sup>&#927;</sup>7"];
      var chords = [];
      
      chords[0] = maj7Chords;
      chords[1] = dom7Chords;
      chords[2] = min7Chords;
      chords[3] = halfdimChords;
      chords[4] = dimChords;
      
      var chordIndex = Math.floor(Math.random() * 12);
      document.getElementById('stuff').innerHTML = chords[0][chordIndex];
      var chordTypes = [0];
      var sequence = 'random';
      var interval = 2;
      var currentChordType = 0;
      
      stuffDiv = document.getElementById('stuff')
      stuffDiv.onclick = function(){
      	changeChordDisplay();
      };     
      
      function chordTypeChange(el){
      	chordTypeNodes = document.getElementsByName('chordType');
      	chordTypes = [];	
      	for (i=0; i < chordTypeNodes.length; i++){
      		if (chordTypeNodes[i].checked){
      			chordTypes.push(i);	
      		}
      	}
      	if (chordTypes.length > 0){	
      		currentChordType = chordTypes[0];
      	}else{
      		currentChordType = 0;
      		chordTypes.push(0);
      		document.getElementById('chordType0').checked = true;
      	}
      	document.getElementById('stuff').innerHTML = chords[currentChordType][chordIndex];
      
      }
      
      function sequencechange(el){
      	divEl = document.getElementById('intervalDiv');
      	if (el.value == 'random'){
      		intervalNodes = document.getElementsByName('interval');
      		for (i=0; i < intervalNodes.length; i++){
      			intervalNodes[i].disabled = true;
      		}
      		divEl.style.backgroundColor = '#c0c0c0';
      	}else{
      		intervalNodes = document.getElementsByName('interval');
      		for (i=0; i < intervalNodes.length; i++){
      			intervalNodes[i].disabled = false;
      		}
      		divEl.style.backgroundColor = 'white';
      	}
      	sequence = el.value
      	el.blur();
      	document.getElementById('stuff').focus();
      
      }
      
      function intervalChange(el){
      	interval = parseInt(el.value);
      	el.blur();
      	document.getElementById('stuff').focus();
      }
      
      document.onkeydown = function(evt) {
          evt = evt || window.event;
      	if(evt && (evt.keyCode == 38 || evt.keyCode == 40) ){ 
      		// triggered by up/down arrows e.g. left/right pedals on AirTurn
      		changeChordDisplay(evt.keyCode);
      	}
      
      };
      
      
      function changeChordDisplay(code){
      	chordTypeNodes = document.getElementsByName('chordType');
      	count = 0	
      	for (i=0; i < chordTypeNodes.length; i++){
      		if (chordTypeNodes[i].checked){
      			count++;
      		}
      	}	
      	if (count == 0) alert('Select at least one chord type above');
      	if (sequence == 'random'){
      		// random sequence
      		lchord = [];
      		for (i=0; i < chordTypeNodes.length; i++){
      			if (chordTypeNodes[i].checked){
      				lchord = lchord.concat(chords[i]);
      			}
      		}
      		i = Math.floor(Math.random() * lchord.length);
      		document.getElementById('stuff').innerHTML = lchord[i];
      	}else{
      		currentChordType++;
      		currentChordType = currentChordType % chordTypes.length;
      		if(currentChordType == 0){
      			up = true;
      			if(sequence != 1) up = false;
      			if(code == 38) up = !up; // down key pressed
      			if(up){
      				chordIndex = chordIndex + interval;
      			}else{
      				chordIndex = chordIndex - interval;
      				if(chordIndex < 0) chordIndex = chordIndex +12;
      			}
      			chordIndex = chordIndex % 12;
      		}
      		document.getElementById('stuff').innerHTML = chords[chordTypes[currentChordType]][chordIndex];
      		
      	}
      
      }


// Registering Service Worker
if('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/jazzflash/sw.js');
};


