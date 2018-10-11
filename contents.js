let images = document.getElementsByTagName('img');

let blockedImages = ["https://www.geeksforgeeks.org/wp-content/uploads/GeeksforGeeksLogoHeader.png", 
"https://cdncontribute.geeksforgeeks.org/wp-content/uploads/Side-Ad1-min.png",
"https://cdncontribute.geeksforgeeks.org/wp-content/uploads/vertical-Technical-Scripter-min.png",
"https://cdncontribute.geeksforgeeks.org/wp-content/uploads/horizntal-Technical-Scripter-min.png",
"https://www.geeksforgeeks.org/wp-content/uploads/gfg_transparent_white_small.png",
"https://cdncontribute.geeksforgeeks.org/wp-content/uploads/fork-min.png"
]

for (let i = 0, l = images.length; i < l; i++) {
  if(blockedImages.includes(images[i].src)){
	 images[i].src=''; 
  }
}
