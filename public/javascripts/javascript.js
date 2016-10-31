// DOM Ready =============================================================
$(document).ready(function() {

    // Populate the user table on initial page load
    populateTableMutants();
    populateTableSkills()
    // Add User button click
    $('#btnAddUser').on('click', addUser);
    $('#btnAddSkill').on('click', addSkill);
    // Delete User link click
    $('#userList table tbody').on('click', 'td a.btn.btn-danger', deleteUser);
    $('#userSkills table tbody').on('click', 'td a.btn.btn-danger', deleteSkill);

});

// Functions =============================================================

// Fill table with data
function populateTableMutants() {

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON('/api/mutants', function(data) {

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function() {
            tableContent += '<tr>';
            tableContent += '<td>' + this.name + '</td>';
            tableContent += '<td><a href="#" class="btn btn-danger" role="button" rel="' + this.id + '">Delete</a></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#userList table tbody').html(tableContent);
    });
};

function populateTableSkills() {

    // Empty content string
    var skill = '';

    // jQuery AJAX call for JSON
    $.getJSON('/api/skills', function(data) {

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function() {
            skill += '<tr>';
            skill += '<td>' + this.power + '</td>';
            skill += '<td><a href="#" class="btn btn-danger" role="button" rel="' + this.id + '">Delete</a></td>';
            skill += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#userSkills table tbody').html(skill);
    });
};

// Add User
function addUser(event) {
    event.preventDefault();

    // Super basic validation - increase errorCount variable if any fields are blank
    var errorCount = 0;
    $('#addUser input').each(function(index, val) {
        if ($(this).val() === '') {
            errorCount++;
        }
    });

    // Check and make sure errorCount's still at zero
    if (errorCount === 0) {

        // If it is, compile all user info into one object
        var newUser = {
            'name': $('#addUser fieldset input#inputMutant').val()
        }

        // Use AJAX to post the object to our adduser service
        $.ajax({type: 'POST', data: newUser, url: '/api/mutants', dataType: 'JSON'}).done(function(response) {
            // Clear the form inputs
            $('#addUser fieldset input').val('');
            populateTableMutants();

        });
    } else {
        // If errorCount is more than 0, error out
        alert('Please fill in all fields');
        return false;
    }
};

function addSkill(event) {
    event.preventDefault();

    // Super basic validation - increase errorCount variable if any fields are blank
    var errorCount = 0;
    $('#addSkill input').each(function(index, val) {
        if ($(this).val() === '') {
            errorCount++;
        }
    });

    // Check and make sure errorCount's still at zero
    if (errorCount === 0) {

        // If it is, compile all user info into one object
        var newUser = {
            'power': $('#addSkill fieldset input#inputSkill').val()
        }

        // Use AJAX to post the object to our adduser service
        $.ajax({type: 'POST', data: newUser, url: '/api/skills', dataType: 'JSON'}).done(function(response) {
            // Clear the form inputs
            $('#addSkill fieldset input').val('');
            populateTableSkills();

        });
    } else {
        // If errorCount is more than 0, error out
        alert('Please fill in all fields');
        return false;
    }
};

// Delete User
function deleteUser(event) {

    event.preventDefault();

    // Pop up a confirmation dialog
    var confirmation = confirm('Are you sure you want to delete this user?');

    // Check and make sure the user confirmed
    if (confirmation === true) {

        // If they did, do our delete
        $.ajax({
            type: 'DELETE',
            url: '/api/mutants/' + $(this).attr('rel')
        }).done(function(response) {
            // Update the table
            populateTableMutants();

        });

    } else {

        // If they said no to the confirm, do nothing
        return false;

    }

};

function deleteSkill(event) {

    event.preventDefault();

    // Pop up a confirmation dialog
    var confirmation = confirm('Are you sure you want to delete this user?');

    // Check and make sure the user confirmed
    if (confirmation === true) {

        // If they did, do our delete
        $.ajax({
            type: 'DELETE',
            url: '/api/skills/' + $(this).attr('rel')
        }).done(function(response) {
            // Update the table
            populateTableSkills();

        });

    } else {

        // If they said no to the confirm, do nothing
        return false;

    }

};
