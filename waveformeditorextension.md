---
layout: project
title: Waveform Editor Extension
---
<p>
While developing another project, <a href="minutum">Minutum</a>, I wanted to have the ability to modify the cue points of Sound Wave assets
within the UE5 editor to better line up the triggering of events without having to go back and reauthor the source audio files in a DAW. I saw that Epic had a Waveform Editor plugin and surmised that what I wanted would be great as an extension of that, and thus I began developing my Waveform Editor Extension plugin. You can find it on GitHub <a href="https://github.com/Vazumongr/Waveform-Editor-Extension">here</a>.
<br>
<em>Note: Due to portions of the plugin being private'ed away, limitations of inheritance with UE's Slate, and me simply not 
having the storage space for a source build, I am developing the plugin "decoupled" from the engine plugin. Essentially copy-pasted into 
a new plugin directory and modified there.
</em>
</p>

<p>
Currently it only supports the ability to add additional cue points to an existing Sound Wave asset. I am currently working on extending the editor
to provide some kind of interface for better modification and deletion of existing cue points.
</p>


<p>
    <em>Demos coming soon</em>
</p>