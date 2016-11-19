$(document).ready(function() {})

var home = $('#home-menu')
var reg = $('#reg-menu')
var login = $('#login-menu')

function editPointerHome() {
    home.className = 'active item'
    reg.className = 'item'
    login.className = 'item'
}

function editPointerReg() {
    home.className = 'item'
    reg.className = 'active item'
    login.className = 'item'
}

function editPointerLogin() {
    home.className = 'item'
    reg.className = 'item'
    login.className = 'active item'
}

function getMutant() {
    $.ajax({
        url: `http://localhost:3000/api/mutantskill`,
        method: "get",
        success: function(data) {
            let html = `        <table class="ui striped table">
                  <thead>
                      <tr>
                          <th>Mutant Name</th>
                          <th>Skill</th>
                      </tr>
                  </thead>
                  <tbody>
`
            for (var i = 0; i < data.length; i++) {
                html += `
                <tr class="top aligned">
                    <td>${data[i].name}</td>
                    <td class="top aligned">`
                for (var j = 0; j < data[i].Skills.length; j++) {
                  html +=  `${data[i].Skills[j].power} <br>`
                }
                html += `</td>
                </tr>
        `
            }
            html += `
      </tbody>
  </table>

      `
            $('#body').append(html)

        }
    })
}
