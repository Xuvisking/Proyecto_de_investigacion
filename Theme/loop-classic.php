<?php 

/**
 * Classic Blog Style "loop" to display posts
 */

?>

	<?php
	
	global $bunyad_loop;
	
	if (!is_object($bunyad_loop)) {
		$bunyad_loop = $wp_query;
	}
	
	if ($bunyad_loop->have_posts()):
		
		$attribs = array('class' => array('listing-classic', Bunyad::registry()->listing_class));
		
		if (Bunyad::options()->pagination_type == 'infinite') {
			$attribs['data-infinite'] = Bunyad::markup()->unique_id('listing-'); 
		}

	?>
		
	<div <?php Bunyad::markup()->attribs('loop', $attribs); ?>>
	
			<?php 
			
			while ($bunyad_loop->have_posts()): 
				$bunyad_loop->the_post();
			?>

				<?php get_template_part('content', get_post_format()); ?>
				
			<?php 
			endwhile; 
			?>
				
	</div>

	<?php if (!Bunyad::options()->blog_no_pagination): // pagination can be disabled ?>
	
	<div class="main-pagination">
		<?php echo Bunyad::posts()->paginate(array(), $bunyad_loop); ?>
	</div>
	
	<?php endif; ?>
		

	<?php elseif (is_archive()): // show error on archive only ?>

		<article id="post-0" class="page no-results not-found">
			<div class="post-content">
				<h1><?php _e( '¡Nada Encontrado!', 'bunyad' ); ?></h1>
				<p><?php _e('Disculpe, pero no se encontraron resultados para el texto solicitado.', 'bunyad'); ?></p>
			</div><!-- .entry-content -->
		</article><!-- #post-0 -->
	
	<?php endif; ?>
