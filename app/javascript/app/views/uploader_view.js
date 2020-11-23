import $ from 'jquery';
import _ from "underscore";
import { View } from "backbone.marionette";

const Uploader = View.extend({
  uploadUrl: '/api/users',

  events: {
    'change .uploader': 'uploadFile'
  },

  template: _.template(`
    <div class="row mt-3">      
      <div class="input-group col-4">
        <div class="custom-file">
          <input type="file" class="custom-file-input uploader" accept=".csv">
          <label class="custom-file-label">Choose a CSV file to upload</label>
        </div>
      </div>
    </div>
  `),

  initialize() {
    this.on('upload:success', data => console.log(data));
    this.on('upload:error', xhr => alert(xhr.responseText));
  },

  uploadFile(e) {
    const formData = new FormData;
    formData.append('file', e.target.files[0]);

    $.ajax({
      url: this.uploadUrl,
      data: formData,
      dataType: 'json',
      type: 'post',
      contentType: false,
      processData: false,
      success: data => this.trigger('upload:success', data),
      error: (xhr) => this.trigger('upload:error', xhr)
    });
  }
});

export default Uploader