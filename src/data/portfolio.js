/*
  HOW TO CHANGE THE VIDEOS
  Reels: put the .mp4 (and a cover .jpg) in /public, then edit REELS below.
  YouTube: paste the video id (the part after "v=" in the link) into YOUTUBE below.
*/

export const REELS = [
  { file: "reel2.mp4", cover: "reel2-cover.jpg", title: "Good-bye IIT Roorkee", views: "2.1M" },
  { file: "reel1.mp4", cover: "reel1-cover.jpg", title: "Meet this 14-year-old", views: "415K" },
  { file: "reel3.mp4", cover: "reel3-cover.jpg", title: "Introvert to extrovert", views: "239K" },
  { file: "reel5.mp4", cover: "reel5-cover.jpg", title: "Ghar wapsi: hometown", views: "152K" },
];

export const YOUTUBE = [
  { id: "d-_gWYCjUkI", start: 57, title: "I Was Crying Every Night. Here’s What Changed!" },
  { id: "CxNJF_hQLxo", start: 0, title: "I am leaving my 15 LPA Job!" },
  { id: "8O531fVQ7bs", start: 40, title: "I went to “India ke Top 1%” (Anil Kapoor Show)" },
  { id: "6yjAdL-NBz0", start: 10, title: "How I went from Introvert to Extrovert with this one change!" },
];

// Brands Aryan has made collab content with as a creator.
// To add one: put the logo in src/assets/brands/, import it, and add a line below.
// `shape: "tall"` gives square/stacked logos a bit more height. `bg` colours the tile.
import scaler from "../assets/brands/scaler.png";
import nasher from "../assets/brands/nasher-miles.png";
import zouk from "../assets/brands/zouk.png";
import masai from "../assets/brands/masai.png";
import thero from "../assets/brands/thero.png";
import superprofile from "../assets/brands/superprofile.png";
import breezo from "../assets/brands/breezo.png";
import chemistors from "../assets/brands/chemistors.png";
import pant from "../assets/brands/the-pant-project.png";
import kingdom from "../assets/brands/kingdom-of-white.png";
import leaf from "../assets/brands/leaf.png";
import pracbee from "../assets/brands/pracbee.png";
import senseio from "../assets/brands/senseio.png";

export const BRANDS = [
  { name: "Scaler School of Technology", logo: scaler },
  { name: "Nasher Miles", logo: nasher },
  { name: "Zouk", logo: zouk },
  { name: "Masai", logo: masai },
  { name: "Thero for Men", logo: thero, bg: "rgb(51, 63, 73)", shape: "mid" },
  { name: "SuperProfile", logo: superprofile },
  { name: "Breezo", logo: breezo },
  { name: "Chemistors", logo: chemistors, bg: "rgb(86, 177, 196)", shape: "tall" },
  { name: "The Pant Project", logo: pant, shape: "tall" },
  { name: "Kingdom of White", logo: kingdom },
  { name: "Leaf", logo: leaf, shape: "tall" },
  { name: "PracBee", logo: pracbee, shape: "tall" },
  { name: "Senseio AI", logo: senseio, shape: "icon", label: "Senseio AI" },
];
