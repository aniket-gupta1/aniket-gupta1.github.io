---
layout: page
title: Gallery
permalink: /gallery/
nav: true
nav_order: 4
images:
  photoswipe: true
---

{% assign gallery_data = site.data.gallery | group_by: "year" %}

{% for year_group in gallery_data %}
  <div class="gallery-year-group">
    <div class="gallery-header">
      <h2>{{ year_group.name }}</h2>
    </div>
    {% assign location_data = year_group.items | group_by: "location" %}
    {% for location_group in location_data %}
      <div class="gallery-location-group">
        <h3>{{ location_group.name }}</h3>
        <div class="gallery pswp-gallery" id="gallery-{{ year_group.name | slugify }}-{{ forloop.index }}">
          {% for item in location_group.items %}
            {% for image in item.images %}
              <a href="{{ '/assets/img/gallery/' | append: image.filename | relative_url }}"
                 data-pswp-width="{{ image.width }}"
                 data-pswp-height="{{ image.height }}"
                 target="_blank"
                 rel="noopener noreferrer">
                <img src="{{ '/assets/img/gallery/' | append: image.filename | relative_url }}" alt="{{ image.caption }}" />
                <div class="caption">{{ image.caption }}</div>
              </a>
            {% endfor %}
          {% endfor %}
        </div>
      </div>
    {% endfor %}
  </div>
{% endfor %}

<style>
.gallery-year-group {
  margin-bottom: 3rem;
  display: flex;
  flex-wrap: wrap;
}
.gallery-header {
  flex: 0 0 100px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  text-align: right;
  margin-right: 1rem;
}
.gallery-location-group {
  flex: 1;
}
.gallery-location-group h3 {
  margin-bottom: 1rem;
}
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}
.gallery a {
  position: relative;
  display: block;
}
.gallery img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 0.5rem;
}
.gallery .caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.6);
  color: white;
  padding: 0.5rem;
  font-size: 0.8rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  opacity: 0;
  transition: opacity 0.3s;
}
.gallery a:hover .caption {
  opacity: 1;
}
</style>

<script type="module">
  import PhotoSwipeLightbox from 'https://unpkg.com/photoswipe/dist/photoswipe-lightbox.esm.js';
  import PhotoSwipe from 'https://unpkg.com/photoswipe/dist/photoswipe.esm.js';

  const galleries = document.querySelectorAll('.pswp-gallery');
  galleries.forEach((gallery, index) => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: `#${gallery.id}`,
      children: 'a',
      pswpModule: PhotoSwipe
    });

    lightbox.on('uiRegister', function() {
      lightbox.pswp.ui.registerElement({
        name: 'rotate-button',
        order: 8,
        isButton: true,
        tagName: 'button',
        // add svg icon
        html: '<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 512 512" width="100" height="100"><path d="M464 16.004c-14.28 0-25.98 11.7-25.98 26s11.7 26 25.98 26c95.42 0 173.35 77.93 173.35 173.35 0 95.42-77.93 173.35-173.35 173.35-95.42 0-173.35-77.93-173.35-173.35 0-14.28-11.7-25.98-26-25.98s-26 11.7-26 25.98c0 123.54 100.46 224.62 224.62 224.62s224.62-100.46 224.62-224.62S379.54 16.004 256 16.004z"/></svg>',
        onClick: (event, el) => {
          const slide = lightbox.pswp.currSlide;
          if (slide) {
            let newAngle = (slide.angle || 0) + 90;
            slide.angle = newAngle;
            slide.content.element.style.transform = `rotate(${newAngle}deg)`;
          }
        }
      });
    });

    lightbox.init();
  });
</script>