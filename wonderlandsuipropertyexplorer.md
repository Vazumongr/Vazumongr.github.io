---
layout: project
title: Wonderlands UI Property Explorer
---

<div style="display: flex; justify-content:center;">
    <a href="https://github.com/Vazumongr/Wonderlands-UI-Property-Explorer">https://github.com/Vazumongr/Wonderlands-UI-Property-Explorer</a>
</div>

<div style="height:20px;"></div>

<p> Wonderlands UI Property Explorer is a modding tool that allows the runtime inspection of UI data for Gearbox's Tiny Tina's Wonderlands. </p>

<div style="display: flex; justify-content:center;">
    <img src="/assets/images/propexplorertrim.gif">
</div>

<p>
The repo linked above contains the code fragments that allows you to inspect/explore the properties available for a given UI element. I wrote this as a way of inspecting the properties available on UI screens, primarily to make it easier for making UI mods. There are three core components: PropertyExplorer.js, PropertyExplorer.css, and PropertyExplorer.html. They contain all you'll need to implement this tool. There are more details at the top of each of those files but essentially you just need to copy+paste their contents into the respective files and repak them. You can find more information on pakfile modding <a href="https://github.com/BLCM/BLCMods/wiki/Accessing-Borderlands-3-Data">here</a>.
</p>

<p>
At the top of the PropertyExplorer window is a Back button, this will step back a property/level. Below that is the Path to the currently inspected object. Below that is the main part of the tool, the properties on the currently inspected object. These are displayed in the format of [PropertyName:] [PropertyType] [Value]. If the properties value cannot be listed in a meaningful way, it is omitted. The word-wrapping can make this a little hard to read at times and I'd like to add highlighting but I don't know how 😅 I'm not a web dev.
</p>

<p>
You can click on properties to inspect them further, but if they are primitives they cannot be inspected as there is nothing else to them that isn't already being displayed. You can call functions and inspect their return values (if they have one) as long as the function does not require any arugments to be called. You can also inspect the elements contained within arrays, one of the main one's seen is the CoherentArrayProxy type.
</p>

<p>
When calling functions, if they return nothing (undefined), you will see the property explorer inform you with "Notice: Object is undefined." Everything else should be handled normally.
</p>

<p>
<em><strong>Disclaimer</strong>: This tool is not for modifying game data at runtime, it is purely for inspecting what properties exist in the javascript layer of GBX's UI tech stack. If you are looking for a tool that gives you a nice GUI for changing game data on the fly, this is not it.</em>
</p>