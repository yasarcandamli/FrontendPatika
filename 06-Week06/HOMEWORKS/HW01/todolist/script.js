// Local Storage'dan görevleri al
function getTasksFromLocalStorage() {
    let tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}

// Local Storage'a görevleri kaydet
function saveTasksToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Local Storage'ı güncelle
function updateLocalStorage() {
    const tasks = [];
    const listItems = document.querySelectorAll('#list li');
    listItems.forEach(item => {
        const taskText = item.querySelector('.task-text').textContent;
        const isChecked = item.classList.contains('checked');
        tasks.push({ text: taskText, checked: isChecked });
    });
    
    saveTasksToLocalStorage(tasks);
}

// Toast mesajını gösteren fonksiyon
function showToast(isSuccess) {
    const toastElement = isSuccess ? document.querySelector('.toast.success') : document.querySelector('.toast.error');

    // Toast'i göster
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
}

// Silme işareti ekleme ve tıklama olayını tanımlayan fonksiyon
function addRemoveButton(listItem) {
    let span = document.createElement('span');
    let sign = document.createTextNode('\u00D7'); // unicode x karakteri
    span.className = 'close';
    span.appendChild(sign);
    listItem.appendChild(span);

    span.addEventListener('click', () => {
        listItem.remove();
        updateLocalStorage(); // Local Storage'ı güncelle
    });
}

// Elemanın üzerine tıklanıldığında checkleyen fonksiyon
function toggleComplete(event) {
    const li = event.currentTarget; // tıklanan 'li' öğesi
    li.classList.toggle('checked'); // 'li' için checked sınıfını ekle/kaldır

    const textSpan = li.querySelector('.task-text'); // metin 'span'
    if (textSpan) {
        textSpan.classList.toggle('checked'); // 'span' için checked sınıfını ekle/kaldır
    }

    updateLocalStorage(); // Local Storage'ı güncelle
}

// Mevcut tüm liste elemanlarına silme işareti ekleme
function initializeList() {
    let listItems = document.querySelectorAll('li');
    for (let listItem of listItems) {
        addRemoveButton(listItem);
        listItem.addEventListener('click', toggleComplete);
    }
}

// Yeni eleman ekleme fonksiyonu
function addElement(taskName) {
    const ul = document.querySelector('#list');

    const existingTasks = Array.from(ul.querySelectorAll('.task-text')).map(item => item.textContent);
    if (existingTasks.includes(taskName)) {
        return; // Görev zaten varsa ekleme
    }

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = taskName;
    li.appendChild(span);
    addRemoveButton(li);
    li.addEventListener('click', toggleComplete);

    // Eğer görev checked olarak geldiyse ekleyelim
    if (isChecked) {
        li.classList.add('checked');
        span.classList.add('checked');
    }

    ul.appendChild(li);

    // Local Storage'a ekle
    updateLocalStorage();
}

// Yeni eleman ekleme kontrolü
function newElement() {
    const input = document.querySelector('#task');
    const taskName = input.value.trim();

    if (taskName === '') {
        console.log('Listeye boş ekleme yapamazsınız!');
        showToast(false);
    } else {
        addElement(taskName);
        showToast(true);
        input.value = '';
    }
}

// Sayfa yüklendiğinde Local Storage'dan görevleri yükle
function loadTasksFromLocalStorage() {
    const tasks = getTasksFromLocalStorage(); // Local Storage'dan görevleri al
    tasks.forEach(task => addElement(task.text, task.checked)); // Görevleri listeye ekle
}

// Sayfa yüklendiğinde görevleri Local Storage'dan yükle
window.onload = function() {
    loadTasksFromLocalStorage();
    initializeList();
}

// Başlangıçta mevcut liste elemanlarına silme işareti ekle
initializeList();
