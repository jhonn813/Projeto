


 const cts = document.getElementById('Pessoas');

        // Criamos o gráfico
        new Chart(cts, {
            type: 'pie',

            data: {
                labels: [
                    'Ônibus',
                    'Metrô',
                    'Trem',
                    'BRT'
                ],

                datasets: [{
                    label: 'Quantos em (%)',

                    data: [
                        2000000,
                        630000,
                        350000,
                        600000
                    ],

                    backgroundColor: [
                        '#3498db',
                        '#e74c3c',
                        '#2ecc71',
                        '#f1c40f'
                    ],

                    borderWidth: 1
                }]
            },

            options: {
                responsive: true,

                plugins: {
                    legend: {
                        position: 'bottom'
                    },

                    title: {
                        display: true,
                        text: 'Pessoas por dia '
                    }
                }
            }
        });



             const ctx = document.getElementById('myChart');

        // Criamos o gráfico
        new Chart(ctx, {
            type: 'pie',

            data: {
                labels: [
                    'Ônibus',
                    'Metrô',
                    'Trem',
                    'BRT'
                ],

                datasets: [{
                    label: 'Transporte público',

                    data: [
                        58,
                        17,
                        9,
                        16
                    ],

                    backgroundColor: [
                        '#3498db',
                        '#e74c3c',
                        '#2ecc71',
                        '#f1c40f'
                    ],

                    borderWidth: 1
                }]
            },

            options: {
                responsive: true,

                plugins: {
                    legend: {
                        position: 'bottom'
                    },

                    title: {
                        display: true,
                        text: 'Quantos em (%)'
                    }
                }
            }
        });
       function abrir(){
           const menu = document.getElementById("menu-lateral");
           menu.classList.toggle("btn-expandir")
       }
     menu.addEventListener("click", abrit)