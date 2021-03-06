console.log('test.js');
var gtk = require('./build/default/gtk');
var fs  = require('fs');

process.nextTick(function () {
  gtk.init();

  var window = new gtk.Window();
  var hbox   = new gtk.Hbox();
  var progress_hbox = new gtk.Hbox();
  window.add(hbox);

  var hbox2 = new gtk.Hbox();
  var hbox3 = new gtk.Hbox();
  var entry = new gtk.Entry();
  var progressbar = new gtk.ProgressBar();
  hbox.add(hbox2);
  hbox.add(hbox3);
  hbox.add(progress_hbox);
  progress_hbox.add(progressbar);
  progressbar.setFraction(0.45);


  entry.setText('A teeheehee!');
  entry.setVisibility(true);

  entry.on('changed', function () {
    console.log('changed');
  });

  var button = new gtk.Button();
  //button.setLabel('Test Button');

  var img = new gtk.Image();
  img.setFromFile('./data/ngtk.png');
  button.setImage(img);

  button.on('clicked', function () {
    console.log('clicked');
    var dialog = new gtk.MessageDialog(window, gtk.DIALOG_DESTROY_WITH_PARENT,
                         gtk.MESSAGE_INFO, gtk.BUTTONS_OK, 'Node.js + GTK <3');
    dialog.show();
  });

  hbox2.add(button);
  hbox3.add(entry);

  window.setTitle('Node');
  window.setResizable(true);
  window.setDefaultSize();

  window.on('destroy', function () {
    console.log(window.getOpacity());
    console.log(window.getPosition());
    console.log(window.getSize());
    console.log(window.getResizable(true));
    console.log(window.getTitle());
    console.log('OMG');
  });

  window.show();
});
