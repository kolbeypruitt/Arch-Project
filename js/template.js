<!--

$(document).ready(function() {
	
	inizializza(); // Invocazione Funzione Inizializzazione
	transizioni(); // Invocazione Funzione Transizioni
	mappa(); // Inizializzazione Funzione Mappa
	
});


// Funzione Inizializzazione 

function inizializza() {
	
	// Sliders
	
	$('#progetto_slides, #showroom_slides').superslides({
		
		animation: "slide",
		pagination: true,	
		play: 5000
		
	});
	$(".slides-pagination a").empty(); // Elimina contenuto bullets
		
	// Activities - Menu Contestuale 
    
    $(".menu_activities").each(function(index) { // Per ogni voce

        if (index === 0) { // Al primo elemento calcola su base fissa
            
            $(this).css({ // Calcola coordinate
                
                top: $(".menu_activities:nth-child(1)").offset().top + $(this).height(), // In base al primo elemento
                right: "calc(0 - " + $("voce", this).width() + ")" // In base alla voce
                
            });
            
        } else { // Per gli altri in base al precedente
            
            $(this).css({ // Calcola coordinate
                
                top: $(this).prev().offset().top + $(this).height(), // In base al primo elemento
                right: "calc(0 - " + $("voce", this).width() + ")" // In base alla voce
                
            });
        
        }

	});
	
}


// Funzione Transizioni

function transizioni() {
		
	// Home - Box
	
	$(".box_link").hover(function() { // Al passaggio del mouse
		
		setTimeout(function() { // Rendi la cornice lampeggiante
			
			$(".box_cornice").addClass("animated pulse");
			
		}, 1500);
		
	}, function() { // Altrimenti resetta
		
		$(".box_cornice").removeClass("animated pulse");
		
	});
	
	// Menu Rapido
	
	$(".sezione_rapida").hover(function() {

		$("h3", this).removeClass("animated slideOutUp");	
		$("h3", this).addClass("animated slideInDown");	
		
	}, function() {
		
		$("h3", this).removeClass("animated slideInDown");	
		$("h3", this).addClass("animated slideOut");	
			
	});
	
	// Menu Principale - Pulsante
	
	$(".hamburger").on("click tap", function() { // Al primo click sul pulsante
		
		if (!$(this).hasClass("is-active")) { // Se il menu risulta chiuso aprilo
		
			$(this).addClass("is-active"); // Attiva il pulsante
			$("#pulsante_menu").addClass("pulsante_attivo"); // Trasla il pulsante a destra
			$("#menu_principale").addClass("apri_menu_larghezza"); // Apri il menu principale 
			
			setTimeout(function() {
			
				$("#menu_principale").addClass("apri_menu_altezza"); // Apri il menu principale 
			
			}, 500);
			setTimeout(function() {
			
				$("#menu_voci a:nth-child(odd)").removeClass("animated fadeOutUp"); // Anima voci di menu dispari
				$("#menu_voci a:nth-child(odd)").addClass("visibile animated fadeInDown"); // Anima voci di menu dispari
			
			}, 750);
			setTimeout(function() {
			
				$("#menu_voci a:nth-child(even)").removeClass("animated fadeOutUp"); // Anima voci di menu pari
				$("#menu_voci a:nth-child(even)").addClass("visibile animated fadeInDown"); // Anima voci di menu pari
			
			}, 1000);
			setTimeout(function() {
			
				$("#social a:nth-child(odd)").removeClass("animated rotateOut"); // Anima voci di menu dispari
				$("#social a:nth-child(odd)").addClass("visibile animated rotateIn"); // Anima voci di menu dispari
			
			}, 1500);
			setTimeout(function() {
				
				$("#social a:nth-child(even)").removeClass("animated rotateOut"); // Anima voci di menu pari
				$("#social a:nth-child(even)").addClass("visibile animated rotateIn"); // Anima voci di menu pari
			
			}, 2000);
		
		} else { // Altrimenti chiudilo
					
			$("#social a:nth-child(even)").removeClass("visibile animated rotateIn"); // Anima voci di menu pari
			$("#social a:nth-child(even)").addClass("animated rotateOut"); // Anima voci di menu pari
			
			setTimeout(function() {
				
				$("#social a:nth-child(odd)").removeClass("visibile animated rotateIn"); // Anima voci di menu dispari
				$("#social a:nth-child(odd)").addClass("animated rotateOut"); // Anima voci di menu dispari
			
			}, 250);
			setTimeout(function() {
			
				$("#menu_voci a:nth-child(even)").removeClass("visibile animated fadeInDown"); // Anima voci di menu pari
				$("#menu_voci a:nth-child(even)").addClass("animated fadeOutUp"); // Anima voci di menu pari
			
			}, 500);
			setTimeout(function() {
			
				$("#menu_voci a:nth-child(odd)").removeClass("visibile animated fadeInDown"); // Anima voci di menu dispari
				$("#menu_voci a:nth-child(odd)").addClass("animated fadeOutUp"); // Anima voci di menu dispari
			
			}, 1000);
			setTimeout(function() {
				
				$("#menu_principale").removeClass("apri_menu_altezza"); // Apri il menu principale 
				
				
			}, 1500);
			setTimeout(function() {
				
				$("#menu_principale").removeClass("apri_menu_larghezza"); // Apri il menu principale 
				$("#pulsante_menu").removeClass("pulsante_attivo"); // Trasla il pulsante a destra
				
			}, 1750);
			
			$(this).removeClass("is-active"); // Attiva il pulsante
	
		}
	
	});
		
	// Menu Contestuale - Projects
    
    $(".menu_projects").on("click tap", function(e) { // Al click della voce 
        
        e.preventDefault(); // Disattiva funzione standard link
		
		$(this).siblings().children().removeClass("lettera_attiva"); // Disattiva precedeti selezioni
		$(".lettera", this).addClass("lettera_attiva"); // Rende voce attiva

    });
    
	
	// Menu Contestuale - Activities
    
    $(".menu_activities").on("click tap", function(e) { // Al click della voce 
        
        e.preventDefault(); // Disattiva funzione standard link
		
		$(this).siblings().children().removeClass("numero_attivo"); // Disattiva precedeti selezioni
        
        $("#container").animate({ // Vai all'ancora con animazione
        
            scrollTop: $(".summary[rel='" + $(this).attr("rel") + "']").offset().top - ($("#container").offset().top - $("#container").scrollTop()) // Posizione elemento di destinazione - (posizione container elemento - scroll container elemento)
            
        }, "slow");
		
		$(".numero", this).addClass("numero_attivo"); // Rende voce attiva

    });
    
    // Torna Su
    
    $("#container").on("scroll", function(e) { // Allo scroll del container

        if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) { // Altrimenti se si è arrivati alla fine dello scroll ruota 

			$("#torna_su").removeClass("ruota"); // Ruota

        } else { // Altrimenti
			
			$("#torna_su").addClass("ruota"); // Ruota

		}
        
    });
    $("#torna_su").on("click tap", function() { // Al click del pulsante
	
        if ($("#container").scrollTop() === 0) { // Se non si è in testa alla pagina
            
            $("#container").animate({ // Vai all'ancora con animazione
        
            	scrollTop: $("#activities_incontro").offset().top - ($("#container").offset().top - $("#container").scrollTop()) // Posizione elemento di destinazione - (posizione container elemento - scroll container elemento)
            
        	}, "slow");
		
        } else if (($("#container").scrollTop() >= $("#activities_summary").outerHeight()) && $("#container").scrollTop() < $("#activities_esecutiva").offset().top + ($(".summary").outerHeight() * 3)) {  // Altrimenti se si è superata la prima sezione ma non si è raggiunta l'ultima

			$("#container").animate({ // Torna su con animazione
			
				scrollTop: $("#container").scrollTop() + $(".summary").outerHeight()
				
			}, "slow");	

		} else { // Altrimenti se si è arrivati alla fine dello scroll ruota 

			$("#container").animate({ // Torna su con animazione
			
				scrollTop: 0
				
			}, "slow");
			$(".numero").removeClass("numero_attivo"); // Disattiva voci precedentemente selezionate
            
        }  
		     
    });
	
}


// Funzione Mappa

function mappa() {
	
  // Dichiarazione Variabili
  
  var luogo = new google.maps.LatLng(45.4485896,9.1944947); // Posizione

  // Inizializzazione Oggetto Stile
  
  var stileMappa = [
	  {
		"elementType": "geometry",
		"stylers": [
		  {
			"color": "#f5f5f5"
		  }
		]
	  },
	  {
		"elementType": "labels.icon",
		"stylers": [
		  {
			"visibility": "off"
		  }
		]
	  },
	  {
		"elementType": "labels.text.fill",
		"stylers": [
		  {
			"color": "#616161"
		  }
		]
	  },
	  {
		"elementType": "labels.text.stroke",
		"stylers": [
		  {
			"color": "#f5f5f5"
		  }
		]
	  },
	  {
		"featureType": "administrative.land_parcel",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
			"color": "#bdbdbd"
		  }
		]
	  },
	  {
		"featureType": "poi",
		"elementType": "geometry",
		"stylers": [
		  {
			"color": "#eeeeee"
		  }
		]
	  },
	  {
		"featureType": "poi",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
			"color": "#757575"
		  }
		]
	  },
	  {
		"featureType": "poi.park",
		"elementType": "geometry",
		"stylers": [
		  {
			"color": "#e5e5e5"
		  }
		]
	  },
	  {
		"featureType": "poi.park",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
			"color": "#9e9e9e"
		  }
		]
	  },
	  {
		"featureType": "road",
		"elementType": "geometry",
		"stylers": [
		  {
			"color": "#ffffff"
		  }
		]
	  },
	  {
		"featureType": "road.arterial",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
			"color": "#757575"
		  }
		]
	  },
	  {
		"featureType": "road.highway",
		"elementType": "geometry",
		"stylers": [
		  {
			"color": "#dadada"
		  }
		]
	  },
	  {
		"featureType": "road.highway",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
			"color": "#616161"
		  }
		]
	  },
	  {
		"featureType": "road.local",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
			"color": "#9e9e9e"
		  }
		]
	  },
	  {
		"featureType": "transit.line",
		"elementType": "geometry",
		"stylers": [
		  {
			"color": "#e5e5e5"
		  }
		]
	  },
	  {
		"featureType": "transit.station",
		"elementType": "geometry",
		"stylers": [
		  {
			"color": "#eeeeee"
		  }
		]
	  },
	  {
		"featureType": "water",
		"elementType": "geometry",
		"stylers": [
		  {
			"color": "#c9c9c9"
		  }
		]
	  },
	  {
		"featureType": "water",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
			"color": "#9e9e9e"
		  }
		]
	  }
	];
    
  // Dichiarazione ed Istanziazione oggetto mappa con assegnazione stile e nome

  var stilizzata = new google.maps.StyledMapType(stileMappa, {
        
        name: "Arch & Project"
        
  });
  var opzioniMappa = {
	  
    zoom: 18, // Livello Zoom
    center: luogo, // Centro
	disableDefaultUI: true, // Disabilita UI
    mapTypeControlOptions: {
      
		mapTypeIds: [google.maps.MapTypeId.ROADMAP, stileMappa] // Tipo di Visualizzazione
    
	}
    
  };
  var mappa = new google.maps.Map(document.getElementById('mappa'), opzioniMappa);
 
  //Assegnazione ID mappa ad elemento ed output
  
  mappa.mapTypes.set('stile_mappa', stilizzata);
  mappa.setMapTypeId('stile_mappa');
 
  // Contenuto Finestra informativa
	
  var contentString = '<div id="content">' +
	  '<div id="siteNotice">' +
	  '</div>' +
	  '<img id="logo_mappa" src="img/logo.svg" alt="Arch & Project">' +
	  '</img>';

  // Finestra informativa
  
  var infowindow = new google.maps.InfoWindow({
	  
	content: contentString, // Imposta contenuto
	maxWidth: 210
    
  });

  // Marker

  var marker = new google.maps.Marker({
	  
	position: luogo,
	map: mappa,
	title: 'Arch & Project'
	
  });
  
  marker.addListener('click', function() { // Al click del marker
	
	infowindow.open(mappa, marker); // Apri finestra informativa
	
  });
	
}

//-->