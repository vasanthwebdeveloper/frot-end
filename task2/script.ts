document.addEventListener("DOMContentLoaded", () => {
    const courses = [
        { name: "Basic Algorithm", startDate: "27 Jan, 2023", completed: "10/25 (48%)", duration: "14h 38m 56s" },
        { name: "Web Development", startDate: "23 Feb, 2023", completed: "40/45 (97%)", duration: "36h 30m 00s" },
        { name: "Basic Data Science", startDate: "14 Jan, 2023", completed: "9/37 (40%)", duration: "37h 00m 00s" },
        { name: "UI/UX Design", startDate: "19 Feb, 2023", completed: "26/32 (84%)", duration: "16h 40m 50s" },
        { name: "Project Management", startDate: "27 Jan, 2023", completed: "14/19 (89%)", duration: "13h 20m 00s" }
    ];
    
    const tableBody = document.getElementById("courseTable");
    if (tableBody) {
        courses.forEach(course => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${course.name}</td>
                <td>${course.startDate}</td>
                <td>${course.completed}</td>
                <td>${course.duration}</td>
            `;
            tableBody.appendChild(row);
        });
    }
});
