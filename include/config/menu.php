<!--Inizio Navigazione Rapida-->

<nav id="menu_rapido">

	<h7> <!--Titolo-->
    
    	Menu Rapido
    
    </h7>
    
    <div class="sezione_rapida deseleziona"> <!--Sezione-->
    	
        <h3>
        
        	Houses
            
        </h3>
    
    </div>
    <div class="sezione_rapida deseleziona"> <!--Sezione-->
    
    	<h3>
        
    		Kitchen 
            
        </h3>
    
    </div>
    <div class="sezione_rapida deseleziona"> <!--Sezione-->
    
    	<h3>
        
        	Bathroom
        
        </h3>
    
    </div>
    <div class="sezione_rapida deseleziona"> <!--Sezione-->
    
    	<h3>
    	
        	Living Room
            
        </h3>
    
    </div>
    <div class="sezione_rapida deseleziona"> <!--Sezione-->
    
    	<h3>
        
        	Offices
            
        </h3>
    
    </div>
    <div class="sezione_rapida deseleziona"> <!--Sezione-->
    
    	<h3>
        
        	Various
            
        </h3>
    
    </div>

</nav>

<!--Fine Navigazione Rapida-->

<!--Inizio Navigazione Principale-->

<!--Inizio Pulsante-->

<aside id="pulsante_menu">

	<h7> <!--Titolo-->
    
    	Menu Principale
        
    </h7>
    
    <!--Inizio Pulsante-->
    
    <button class="hamburger hamburger--spring" type="button">
  	
    	<span class="hamburger-box">
        	<span class="hamburger-inner">
            </span>
  		</span>

	</button>
    
    <!--Fine Pulsante-->

</aside>

<!--Fine Pulsante-->

<!--Inizio Voci-->

<nav id="menu_principale">

	<h7> <!--Titolo-->
    
    	Menu
    
    </h7>
    
   	<a href="<?php echo $siteurl_."home"; ?>" title="Arch & Project" tabindex="0"> 
    
        <div class="logo_menu"> <!--Logo-->
        </div>
    
    </a>
    
    <!--Inizio Voci-->
    
    <ul id="menu_voci">
    
       <?php 
	   
	   	$sqlMenuHamb = "SELECT * FROM `pagina` WHERE `pagina_dipendenza_id` = 0 AND `pagina_id` != 1 LIMIT 0,5"; // Assegnazione Query MENU Pagina Primo livello DB
		
		$rMenuHamb = $mysqli->query($sqlMenuHamb); // Menu
	   
	   	while ($menuHamb = $rMenuHamb->fetch_array()): 
	     
		 if( $pag == "" ): ?>
         
          <?php if(  $menuHamb["pagina_id"] == 31  ): else: ?>
         
          <a class="<?php if($menuHamb["pagina_id"] == 1 ): echo "voce_attiva"; endif; ?>" href="<?php echo $siteurl_base.$menuHamb["pagina_url"]; ?>" title="<?php echo $menuHamb["pagina_meta_title"]; ?>" rel="<?php echo $siteurl_base.$menuHamb["pagina_url"]; ?>">
        
            <li>
            
               <?php echo $menuHamb["pagina_meta_title"]; ?>
                
            </li>
            
          </a>
 
		<?php 
		  
		  endif;
		
		 else:
		
	   ?> 
       
       
       <?php if(  $menuHamb["pagina_id"] == 31  ): else: ?>
        
        <a class="<?php if($pag == $menuHamb["pagina_id"] || $box == $menuHamb["pagina_id"]  ): echo "voce_attiva"; endif; ?>" href="<?php echo $siteurl_base.$menuHamb["pagina_url"]; ?>" title="<?php echo $menuHamb["pagina_meta_title"]; ?>" rel="<?php echo $siteurl_base.$menuHamb["pagina_url"]; ?>">
        
            <li>
            
               <?php echo $menuHamb["pagina_meta_title"]; ?>
                
            </li>
            
        </a>
        <?php endif; ?>
        
        
		<?php 
		
		    /* CONDIZIONE PAGINA POST */
			
			if ( $menuHamb["pagina_dipendenza_id"]  == "post" ): 

			 $sqlMenu2 = " SELECT * FROM `pagina` WHERE `pagina_dipendenza_id` = ".$menuHamb["pagina_id"]." "; 
			 
			 $rMenu2 = $mysqli->query($sqlMenu2); // Menu
			 $countMenu2 = $rMenu2->num_rows;
			 
			 if ( $countMenu2  >= 1 ): 
		 
		 ?>
                   
       <!--  <span class="popUpMenu container_menu_livello_2 <?php if( $box == $menuHamb["pagina_id"] ): echo "voce_attiva2"; endif; ?>">
                   
         <?php while ($menuHamb2 = $rMenu2->fetch_array()): ?>
              
            
              
             <a class="voce_livello_2 <?php if( $menuHamb2["pagina_id"] == 18 || $menuHamb2["pagina_id"] == 19 ): else: ?> leggi-tutto <?php endif; ?> <?php if($pag == $menuHamb2["pagina_id"]): echo "voce_livello_2_attiva"; endif; ?>" href="<?php if( $menuHamb2["pagina_id"] == 18 ):  echo "mostre"; elseif( $menuHamb2["pagina_id"] == 19 ):  echo "speciale-cenacolo"; elseif( $menuHamb2["pagina_id"] == 20 ):  echo $siteurl_base."include/pop-up2.php"; else: echo $siteurl_base."include/pop-up4.php"; endif; ?>" title="<?php echo $menuHamb2["pagina_meta_title"]; ?>" data-id="2" rel="<?php echo $menuHamb2["pagina_id"]; ?>">
        
                  <li>
              
                      <?php echo $menuHamb2["pagina_meta_title"]; ?>
                  
                  </li>
              
              </a>
                   
                 
         <?php endwhile; // CHIUSURA LIV 2 ?>
                   
         </span> -->
                   
         <?php
                   
		     endif;
		
		
		    /* CONDIZIONE PAGINA LINK */
			
			elseif ( $menuHamb["pagina_dipendenza_id"]  == "link" ): 

			 $sqlMenu2 = " SELECT * FROM `pagina` WHERE `pagina_dipendenza_id` = ".$menuHamb["pagina_id"]." "; 
			 
			 $rMenu2 = $mysqli->query($sqlMenu2); // Menu
			 $countMenu2 = $rMenu2->num_rows;
			 
			 if ( $countMenu2  >= 1 ): 
		 
		 ?>
                   
        <!-- <span class="container_menu_livello_2 <?php if( $box == $menuHamb["pagina_id"] ): echo "voce_attiva2"; endif; ?>">
                   
         <?php while ($menuHamb2 = $rMenu2->fetch_array()): ?>
              
             <a class="voce_livello_2 <?php if($pag == $menuHamb2["pagina_id"]): echo "voce_livello_2_attiva"; endif; ?>" href="<?php echo $siteurl_base.$menuHamb2["pagina_url"]; ?>" title="<?php echo $menuHamb2["pagina_meta_title"]; ?>" rel="<?php echo $menuHamb2["pagina_url"]; ?>">
        
                  <li>
              
                      <?php echo $menuHamb2["pagina_meta_title"]; ?>
                  
                  </li>
              
              </a>
                   
                 
         <?php endwhile; // CHIUSURA LIV 2 ?>
                   
         </span> -->
                   
         <?php
                   
		     endif;	 
			 
			 
			 
		 
			/* CONDIZIONE PAGINA ARTICOLO */
			
			elseif( $menuHamb["pagina_dipendenza_id"]  == "articolo" ): 
                    
				$sqlArticolo2 = "SELECT * FROM `articolo` WHERE articolo_pagina_id = ".$menuHamb["pagina_id"]." AND articolo_visibile = 1 "; // Assegnazione Query Pagina DB
				
				$rArt2 = $mysqli->query($sqlArticolo2);
				$countArticolo2 =  $rArt2->num_rows;
                   
                if( $countArticolo2 >= 1 ):
				   
		?>
                   
      <!--  <span class="container_menu_livello_2 <?php if( $pag == $menuHamb["pagina_id"] ): echo "voce_attiva2"; endif; ?>">
       
       	<?php while ($articolo2 = $rArt2->fetch_array()): ?>
       
       	<a class="voce_livello_2 <?php if($art == $articolo2["articolo_id"]  ): echo "voce_livello_2_attiva"; endif; ?>" href="<?php echo "#".$articolo2["articolo_url"]; ?>" title="<?php echo $articolo2["articolo_titolo"]; ?>" rel="<?php echo $articolo2["articolo_url"]; ?>">
    
            <li>
        
                <?php echo $articolo2["articolo_titolo"]; ?> 
            
            </li>
          
        </a> 
          
       <?php endwhile; ?>   
        
       </span>  -->

       <?php
       
       			endif; 
				   
		 	else: 
		
			endif;
			
			endif;
		
			endwhile; // CHIUSURA LIV 1 
		
	   ?>
           
    </ul>
    
    <!--Fine Voci-->
    
    <!--Inizio Social-->
    
    <div id="social">
        
        <a href="" title="Segui Arch & Project su Facebook" target="new">
    
            <img src="img/facebook.svg" alt="Arch & Project - Facebook" />
        
        </a>
        <a href="" title="Segui Arch & Project su Instagram" target="new">
    
            <img src="img/instagram.svg" alt="Arch & Project - Instagram" />
        
        </a>
        <a href="" title="Segui Arch & Project su LinkedIn" target="new">
    
            <img src="img/linkedin.svg" alt="Arch & Project - LinkedIn" />
        
        </a>
        <a href="" title="Segui Arch & Project su Pinterest" target="new">
    
            <img src="img/pinterest.svg" alt="Arch & Project - Pinterest" />
        
        </a>
    
    </div>
    
    <!--Fine Social-->
    
</nav>

<!--Fine Voci-->

<!--Fine Navigazione Principale-->

<!--Inizio Area Riservata-->

<aside id="account">

	<!--Inizio Titoli-->

	<hgroup>

        <h7>
        
            Area Riservata
        
        </h7>
        <h2 class="etichetta_pulsante"> 
        
            Register
            
        </h2>
    
    </hgroup>
    
    <!--Fine Titoli-->

</aside>

<!--Fine Area Riservata-->