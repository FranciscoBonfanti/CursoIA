  // Menú móvil
  document.getElementById('mobile-menu').addEventListener('click', function () {
    document.querySelector('.nav-menu').classList.toggle('active');
    this.querySelector('i').classList.toggle('fa-bars');
    this.querySelector('i').classList.toggle('fa-times');
  });

  // Fecha actual para el footer
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Countdown Timer
  function updateCountdown() {
    const nextClassDate = new Date("2025-05-06T18:00:00").getTime();
    const now = new Date().getTime();
    const difference = nextClassDate - now;

    if (difference <= 0) {
      document.getElementById('days').textContent = "00";
      document.getElementById('hours').textContent = "00";
      document.getElementById('minutes').textContent = "00";
      document.getElementById('seconds').textContent = "00";
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, "0");
    document.getElementById('hours').textContent = hours.toString().padStart(2, "0");
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, "0");
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, "0");
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();

  // Materiales del curso
  let materials = [
    {
      id: "1",
      name: "Introducción a la IA",
      type: "PDF",
      date: "01/04/2025",
      downloadUrl: "#"
    },
    {
      id: "2",
      name: "Redes Neuronales",
      type: "PDF",
      date: "08/04/2025",
      downloadUrl: "#"
    },
    {
      id: "2",
      name: "Redes Neuronales",
      type: "PDF",
      date: "08/04/2025",
      downloadUrl: "#"
    },
    {
      id: "3",
      name: "Ejercicios Prácticos",
      type: "ZIP",
      date: "15/04/2025",
      downloadUrl: "#"
    }
  ];

  // Contraseña para subir archivos
  const UPLOAD_PASSWORD = "curso2025"; // Puedes cambiar esta contraseña

  function renderMaterials() {
    const container = document.getElementById('materials-container');
    container.innerHTML = '';

    materials.forEach(material => {
      const materialCard = document.createElement('div');
      materialCard.className = 'material-card';
      materialCard.innerHTML = `
        <div class="material-icon">
          <i class="fas fa-file-alt"></i>
        </div>
        <div class="material-info">
          <h3>${material.name}</h3>
          <p>${material.type} • ${material.date}</p>
        </div>
        <a href="${material.downloadUrl}" class="download-link">
          <i class="fas fa-download"></i> Descargar
        </a>
      `;
      container.appendChild(materialCard);
    });
  }

  // Manejo de subida de archivos
  document.getElementById('file-upload').addEventListener('change', function (e) {
    const fileName = e.target.files[0] ? e.target.files[0].name : 'Seleccionar Archivo';
    document.getElementById('file-name').textContent = fileName;
    document.getElementById('upload-btn').disabled = !e.target.files[0];
  });

  document.getElementById('upload-btn').addEventListener('click', function () {
    const fileInput = document.getElementById('file-upload');
    const passwordInput = document.getElementById('upload-password');
    
    if (fileInput.files.length === 0) {
      alert('Por favor selecciona un archivo para subir.');
      return;
    }
    
    if (passwordInput.value !== UPLOAD_PASSWORD) {
      alert('Contraseña incorrecta. No se puede subir el archivo.');
      return;
    }
    
    const file = fileInput.files[0];
    const fileType = file.name.split('.').pop().toUpperCase();
    
    // Leer el archivo como base64 para guardarlo en el JS
    const reader = new FileReader();
    reader.onload = function(e) {
      const fileData = e.target.result;
      
      // Simulación de subida (en una app real, aquí iría la lógica de subida al servidor)
      const newMaterial = {
        id: Date.now().toString(),
        name: file.name,
        type: fileType,
        date: new Date().toLocaleDateString(),
        downloadUrl: "#",
        data: fileData // Guardar los datos del archivo en el objeto
      };

      materials.push(newMaterial);
      renderMaterials();

      // Reset form
      fileInput.value = '';
      passwordInput.value = '';
      document.getElementById('file-name').textContent = 'Seleccionar Archivo';
      document.getElementById('upload-btn').disabled = true;
      
      alert('Archivo subido correctamente.');
    };
    
    reader.readAsDataURL(file);
  });

  // Enlaces a clases
  let links = [
    {
      id: "1",
      title: "Introducción a la IA",
      date: "01/04/2025",
      type: "recorded",
      url: "https://example.com/class1"
    },
    {
      id: "2",
      title: "Redes Neuronales",
      date: "08/04/2025",
      type: "recorded",
      url: "https://example.com/class2"
    },

    {
      id: "3",
      title: "Aprendizaje Profundo",
      date: "15/04/2025",
      type: "live",
      url: "https://example.com/class3"
    }
  ];


  const UPLOAD_PASSWORDD = "curso2025"; // Puedes cambiar esta contraseña


  function renderLinks() {
    const container = document.getElementById('links-container');
    container.innerHTML = '';

    links.forEach(link => {
      const linkCard = document.createElement('div');
      linkCard.className = 'link-card';
      linkCard.innerHTML = `
        <div class="link-icon">
          <i class="fas ${link.type === 'live' ? 'fa-calendar' : 'fa-video'}"></i>
        </div>
        <div class="link-info">
          <h3>${link.title}</h3>
          <p>${link.date} • ${link.type === 'live' ? 'En vivo' : 'Grabada'}</p>
        </div>
        <a href="${link.url}" target="_blank" class="link-url">
          <i class="fas fa-external-link-alt"></i> ${link.type === 'live' ? 'Unirse a la clase' : 'Ver grabación'}
        </a>
      `;
      container.appendChild(linkCard);
    });
  }

  // Toggle formulario de agregar enlace
  document.getElementById('toggle-add-link').addEventListener('click', function () {
    const form = document.getElementById('add-link-form');
    const passwordInput = document.getElementById('upload-passwordd');

    form.classList.toggle('hidden');

    const icon = this.querySelector('i');
    if (form.classList.contains('hidden')) {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-plus');
      this.textContent = ' Agregar Enlace';
      this.prepend(icon);
    } else {
      icon.classList.remove('fa-plus');
      icon.classList.add('fa-times');
      this.textContent = ' Cancelar';
      this.prepend(icon);
    }
  });

  // Guardar nuevo enlace
  document.getElementById('save-link').addEventListener('click', function () {
    const title = document.getElementById('link-title').value;
    const date = document.getElementById('link-date').value;
    const type = document.getElementById('link-type').value;
    const url = document.getElementById('link-url').value;
    const password = document.getElementById('link-password').value;

    if (!title || !date || !url) {
      alert('Por favor completa todos los campos.');
      return;
    }

    if (password !== UPLOAD_PASSWORD) {
      alert('Contraseña incorrecta. No se puede agregar el enlace.');
      return;
    }

    const newLink = {
      id: Date.now().toString(),
      title,
      date: new Date(date).toLocaleDateString(),
      type,
      url
    };

    links.push(newLink);
    renderLinks();

    // Reset form
    document.getElementById('link-title').value = '';
    document.getElementById('link-date').value = '';
    document.getElementById('link-url').value = '';
    document.getElementById('link-password').value = '';
    document.getElementById('add-link-form').classList.add('hidden');

    const toggleBtn = document.getElementById('toggle-add-link');
    const icon = toggleBtn.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-plus');
    toggleBtn.textContent = ' Agregar Enlace';
    toggleBtn.prepend(icon);
    
    alert('Enlace agregado correctamente.');
  });

  // Inicializar la página
  renderMaterials();
  renderLinks();