const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})




const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})

/* DELETE CONFIRMATION */
function confirmDelete(element) {
    if (confirm("Are you sure you want to delete this row?")) {
        deleteRow(element);
    }
}

function deleteRow(element) {
    var row = element.closest('tr');
    row.remove();
}
/*	lOAD IMAGES	*/
var loadFiles = function(event) {
	var output = document.getElementById('image-preview');
	output.innerHTML = ''; // Clear previous previews

	Array.from(event.target.files).forEach(file => {
		var image = document.createElement('img');
		image.src = URL.createObjectURL(file);
		image.style.width = '100px'; // Set width for preview image
		image.style.margin = '5px'; // Add some margin for better layout
		output.appendChild(image);

		image.onload = function() {
			URL.revokeObjectURL(image.src); // Free memory
		}
	});
};

/* CONFIRMATION STATUS */

function toggleStatus(element) {
	if (element.classList.contains('completed')) {
		element.textContent = 'Pending';
		element.className = 'status pending';
	} else {
		element.textContent = 'Confirmed';
		element.className = 'status completed';
	}
};
 

/* filter */

function sortTable() {
    const filter = document.getElementById("filter-options").value;
    const tbody = document.getElementById("reservation-table-body");
    const rows = Array.from(tbody.querySelectorAll("tr"));

    rows.sort((a, b) => {
        const aType = a.getAttribute("data-type");
        const bType = b.getAttribute("data-type");

        if (filter === "all") {
            return 0; // No sorting if 'all' is selected
        }

        if (aType === filter && bType !== filter) {
            return -1;
        } else if (aType !== filter && bType === filter) {
            return 1;
        } else {
            return 0;
        }
    });

    // Append sorted rows back to the tbody
    rows.forEach(row => tbody.appendChild(row));
};