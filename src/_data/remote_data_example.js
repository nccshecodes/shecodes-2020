const Cache = require('@11ty/eleventy-cache-assets');

/**
 * Grabs the remote data for studio images and returns back
 * an array of objects
 *
 * @returns {Array} Empty or array of objects
 */
module.exports = async () => {
  try {
    // Grabs either the fresh remote data or cached data (will always be fresh live)
    const {items} = await Cache(
      'https://11ty-from-scratch-content-feeds.piccalil.li/media.json',
      {
        duration: '1d', // 1 day
        type: 'json'
      }
    );

    return items;
  } catch (ex) {
    console.log(ex);

    // If failed, return back an empty array
    return [];
  }
};

// Sample corresponding partial to render remote data
// {% if studio.length %}
// <article class="[ studio-feed ] [ dot-shadow panel ] [ bg-tertiary-glare ]">
//   <div class="[ wrapper ] [ flow flow-space-300 ]">
//     <h2
//       class="[ studio-feed__heading ] [ headline ] [ md:measure-micro ]"
//       data-highlight="secondary"
//     >
//       {{ studioFeed.title }}
//     </h2>
//     <p class="visually-hidden" id="studio-feed-desc">
//       A collection of images from around our studio and the people who work here.
//     </p>
//     <div class="[ studio-feed__items ] [ flow-space-700 ]">
//       <ul class="studio-feed__list">
//         {% for item in studio %}
//         <li>
//           <img
//             src="{{ item.medium }}"
//             alt="{{ item.alt }}"
//             draggable="false"
//             class="radius"
//           />
//         </li>
//         {% endfor %}
//       </ul>
//     </div>
//   </div>
// </article>
// {% endif %}
