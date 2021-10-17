var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl)
})
var ele
function add_new_task(ele){
  console.log(ele.parentElement.parentElement.querySelector('.task-area'))
  task_row = ele.parentElement.parentElement.querySelector('.task-area')
  // task_row
  // $(task_row).load('/card_template.html')
  $(task_row).append("<div class='col-12'></div>")
  $(task_row).find('.col-12').load('/card_template.html')
}