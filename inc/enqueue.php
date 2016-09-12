<?php

/**
 * ppwp enqueue scripts
 *
 * @package ppwp
 */
function ppwp_scripts() {
    wp_enqueue_style('ppwp-styles', get_stylesheet_directory_uri() . '/css/style.min.css', array(), '0.0.1');
    wp_enqueue_script('jquery'); 
    wp_enqueue_script('ppwp-scripts', get_template_directory_uri() . '/js/theme.min.js', array(), '0.0.1', true);
    wp_enqueue_script('ppwp-site-script', get_template_directory_uri() . '/js/ppwp.js', array(), '0.0.1', true);
}

add_action('wp_enqueue_scripts', 'ppwp_scripts');
