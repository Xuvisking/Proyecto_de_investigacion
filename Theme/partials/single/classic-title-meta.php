<?php 
/**
 * Classic post style title and meta partial template - called from content.php
 */
?>
		<div class="heading cf">
			<?php 
				$tag = 'h1';
				if (!is_single() OR is_front_page()) {
					$tag = 'h2';
				}
			?>
	
			<<?php echo $tag; ?> class="post-title item fn" itemprop="name">
			<?php if (!is_front_page() && is_singular()): the_title(); else: ?>
			
				<a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>" rel="bookmark">
					<?php the_title(); ?></a>
					
			<?php endif;?>
			</<?php echo $tag; ?>>
			
	
		</div>

		<div class="post-meta cf">
						 
			<i class="fa fa-folder-open"></i> <span class="cats"><?php echo get_the_category_list(__(', ', 'bunyad')); ?></span>
            
            <span class="posted-on">
				<span class="dtreviewed">
					<i class="fa fa-clock-o"></i> <time class="value-title" datetime="<?php echo esc_attr(get_the_time(DATE_W3C)); ?>" title="<?php 
						echo esc_attr(get_the_time('Y-m-d')); ?>" itemprop="datePublished"><?php echo esc_html(get_the_date()); ?></time>
				</span>
			</span>	
				
		</div>	