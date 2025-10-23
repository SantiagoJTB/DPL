// Seleccionar el formulario completo
const form = document.getElementById('lightsaber-form');
// Seleccionar el color del sable (input type="text")
const saberColorInput = document.getElementById('saber-color');
// Seleccionar el tipo de sable (select)
const saberTypeSelect = document.getElementById('saber-type');
// Seleccionar el archivo de imagen (input type="file")
const saberImageInput = document.getElementById('saber-image');
// Botón de submit
const submitButton = form.querySelector('input[type="submit"]');
// Botón de reset
const resetButton = form.querySelector('input[type="reset"]');
// Capturar el evento submit
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evitar que recargue la página
    const color = saberColorInput.value;
    const type = saberTypeSelect.value;
    const file = saberImageInput.files ? saberImageInput.files[0] : null;
    console.log("Color del sable:", color);
    console.log("Tipo de sable:", type);
    console.log("Archivo seleccionado:", file);
});
// Seleccionar el formulario completo
const missionForm = document.getElementById('mission-role-form');
// Seleccionar el nombre del Padawan
const padawanNameInput = document.getElementById('padawan-name');
// Seleccionar radio buttons (afiliación a la Fuerza)
const forceSideRadios = missionForm.querySelectorAll('input[name="force-side"]');
// Seleccionar checkbox (roles de la misión)
const roleCheckboxes = missionForm.querySelectorAll('input[name="role"]');
// Botón para asignar rol
const assignRoleButton = document.getElementById('assign-role');
// Capturar clic en el botón
assignRoleButton.addEventListener('click', () => {
    const padawanName = padawanNameInput.value;
    // Obtener la afiliación seleccionada
    let forceSide = null;
    forceSideRadios.forEach(radio => {
        if (radio.checked) {
            forceSide = radio.value;
        }
    });
    // Obtener roles seleccionados
    const roles = [];
    roleCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            roles.push(checkbox.value);
        }
    });
    // Mostrar los datos capturados
    console.log("Padawan:", padawanName);
    console.log("Afiliación a la Fuerza:", forceSide);
    console.log("Roles asignados:", roles);
});
// Seleccionar el formulario completo
const statusForm = document.getElementById('status-report-form');
// Seleccionar textarea (contenido del informe)
const reportContent = document.getElementById('report-content');
// Seleccionar checkbox de entrenamiento completado
const completedTrainingCheckbox = document.getElementById('completed-training');
// Botón de submit del informe (podemos usar el propio formulario)
statusForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evitar que recargue la página
    const content = reportContent.value;
    const trainingCompleted = completedTrainingCheckbox.checked;
    console.log("Contenido del informe:", content);
    console.log("Entrenamiento completado:", trainingCompleted);
});
