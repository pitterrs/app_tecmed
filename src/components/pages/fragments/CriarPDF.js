import React from "react";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';


const marcado = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAQAAACROWYpAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF+2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMTItMzBUMDE6Mzc6MjArMDE6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTEyLTMwVDAxOjM4OjI4KzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTEyLTMwVDAxOjM4OjI4KzAxOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMSIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IkRvdCBHYWluIDIwJSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowNzVjYjZmMy1jNGIxLTRiZjctYWMyOS03YzUxMWY5MWJjYzQiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5ZTM1YTc3ZC0zNDM0LTI5NGQtYmEwOC1iY2I5MjYyMjBiOGIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowYzc2MDY3Ny0xNDcwLTRlZDUtOGU4ZS1kNTdjODJlZDk1Y2UiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjBjNzYwNjc3LTE0NzAtNGVkNS04ZThlLWQ1N2M4MmVkOTVjZSIgc3RFdnQ6d2hlbj0iMjAxOS0xMi0zMFQwMTozNzoyMCswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjA3NWNiNmYzLWM0YjEtNGJmNy1hYzI5LTdjNTExZjkxYmNjNCIgc3RFdnQ6d2hlbj0iMjAxOS0xMi0zMFQwMTozODoyOCswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jHsR7AAAAUNJREFUOMvN1T9Lw0AYx/EviLVFxFH8M3USgyAFoUsQ0UV8F6Ui4qCTbuJg34HgptBdUATrUoxiqYMgiOBoIcW9BVED+jgkntGm9i6CmN+Sg/vAcc89dwBd5Clzj6uZGg7LJAC62UFipEgKcmroaeZj/gpcIAhl5rE1M0cJQbiCOsIrs5h8WZ4R6j72yBrhcRo+dhE8bCOcoYng/hFOMxAXb/DAHTNxcCGo7JE5LqhjsW2KP6nDcGecCv1vRdC2eJQDLllooach2hbvIghvLJJgM0QHdeq8F0x/5ETRM4b0DonF7be+Pf+y4A4bZnETok4E/XG3xxR3WhasUWeLCg2OGYnXGP1MkPwnLRmJf3UN+RfgtBGe5MnHVQShxBQZzdgcIgjXsKSu/KZmXgKxBkmKsZ6bffoAelilQs3goauyTi+8A8mhgeQlxdNWAAAAAElFTkSuQmCC';
const desmarcado = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAQAAACROWYpAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF+2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMTItMzBUMDE6Mzc6MjArMDE6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTEyLTMwVDAxOjM4OjU3KzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTEyLTMwVDAxOjM4OjU3KzAxOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMSIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IkRvdCBHYWluIDIwJSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpjMGUyMmJhZC1lY2VkLTQzZWUtYjIzZC1jNDZjOTNiM2UzNWMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5M2FhOTEzYy1hZDVmLWZmNGEtOWE5Ny1kMmUwZjdmYzFlYmUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozYmY2ODFlMy1hMTRhLTQyODMtOGIxNi0zNjQ4M2E2YmZlNjYiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjNiZjY4MWUzLWExNGEtNDI4My04YjE2LTM2NDgzYTZiZmU2NiIgc3RFdnQ6d2hlbj0iMjAxOS0xMi0zMFQwMTozNzoyMCswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmMwZTIyYmFkLWVjZWQtNDNlZS1iMjNkLWM0NmM5M2IzZTM1YyIgc3RFdnQ6d2hlbj0iMjAxOS0xMi0zMFQwMTozODo1NyswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+6AB6cQAAAPxJREFUOMvF1b1Kw1AYBuAnFf8QL8WlIHQJIriIdyEu4qCTXop7dwenTgUHpYvgJVhob8AuakE+h9hapJqcFDXvFDgPIXlzvgNLjnQ9GlRM340TK7DsUtRI2zqH09txxUzWn3IrhK4DecXs6wjhnqHwZk/K1fIiDAs81krCW54KPBDG8iTcNBIGf4ND1MWTdmrgqIOL5TM0S8SRhmMu1dAo+2DZ57t9eWajtKrvN1GVnrMK9HewhbBy+nPPJbTsJwmymOn8P7fkfLzQGCoG4G4S3vZc4J4QOnY0KyZ3LYQHjqcjf1Qxrx/inDXtWsfNlU1YdeZOP+Gg67mwwTvIDqR1iAowgQAAAABJRU5ErkJggg==';
const logo = 'data:image/png;base64,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'

const criarPDF = (ordens) => {

    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const replaceDate = (date) => {
        const newdate = new Date(date);
        const dia = (newdate.getDate() + 1) < 10 ? `0${(newdate.getDate() + 1)}` : (newdate.getDate() + 1);;
        const mes = (newdate.getMonth() + 1) < 10 ? `0${(newdate.getMonth() + 1)}` : (newdate.getMonth() + 1);
        const ano = newdate.getFullYear();
        const formatDate = dia + '/' + mes + '/' + ano;
        return (
            formatDate
        )
    };

    const pdfTitle = [
    ];

    const content = [
        {
            columns: [
                {
                    margin: [0, 0, 0, 0],
                    width: '35%',
                    text: 'Empresa: Tec.Med \n Cel: (22) 9982000-70 - CFT: 04509068760 \n E-mail: robsonpaes.tec@hotmail.com',
                    fontSize: 9,
                    // colSpan: 2
                },
                {
                    width: '10%',
                    text: '',
                    fontSize: 9,
                },
                {
                    // width: '20%',
                    // image: logo
                    image: logo,
                    height: 70,
                    width: 70,
                },
                {
                    width: '42%',
                    text: 'Avenida Vicente de Carvalho, 1/43 \n Campos dos Goytacazes - RJ',
                    fontSize: 9,
                    alignment: 'right'
                },
            ]
        },
        {
            text: 'Ordem de Serviço',
            fontSize: 15,
            bold: true,
            margin: [0, 0, 0, 0],
            alignment: 'center'
        },
        {
            style: 'tableExample',
            margin: [0, 5, 0, 10],
            // layout: {
            //     fillColor: function (rowIndex, node, columnIndex) {
            //         return (rowIndex === 0) ? '#c2dec2' : null;
            //     }
            // },
            table: {
                widths: ['25%', '25%', '25%', '25%'],
                body: [
                    [{
                        text: `Data de Abertura: ${replaceDate(ordens.data_abertura)}`,
                        colSpan: 2,
                        bold: true,
                        fontSize: 9
                    },
                    {
                    },
                    {
                        text: `Unidade: ${ordens.unidade}`,
                        colSpan: 2,
                        bold: true,
                        fontSize: 9
                    },
                    {
                    }
                    ],
                    [{
                        text: `Equipamento: ${ordens.equipamento}`,
                        colSpan: 4,
                        bold: true,
                        fontSize: 9
                    }],
                    [{
                        text: `Marca: ${ordens.marca}`,
                        colSpan: 2,
                        bold: true,
                        fontSize: 9
                    },
                    {
                    },
                    {
                        text: `Setor: ${ordens.setor}`,
                        colSpan: 2,
                        bold: true,
                        fontSize: 9
                    },
                    {
                    }
                    ],
                    [{
                        text: `Modelo: ${ordens.modelo}`,
                        colSpan: 2,
                        bold: true,
                        fontSize: 9
                    },
                    {
                    },
                    {
                        text: `Nº Série: ${ordens.num_serie}`,
                        colSpan: 1,
                        bold: true,
                        fontSize: 9
                    },
                    {
                        text: `Patrimônio: ${ordens.patrimonio}`,
                        colSpan: 1,
                        bold: true,
                        fontSize: 9
                    }
                    ],
                ]
            }
        },
        {
            style: 'tableExample',
            margin: [0, 5, 0, 10],
            table: {
                headerRows: 1,
                widths: ['25%', '25%', '25%', '25%'],
                body: [
                    [{ text: '', style: 'tableHeader', colSpan: 4 }, { text: 'Header 2', style: 'tableHeader' }, { text: 'Header 3', style: 'tableHeader' }, { text: 'Header 4', style: 'tableHeader' }],
                    [{ text: '', colSpan: 4, fontSize: 9 }, {}, {}, { text: '.' }],
                ]
            },
            layout: 'headerLineOnly'
        },
        {
            style: 'tableExample',
            margin: [0, 5, 0, 10],
            table: {
                headerRows: 1,
                widths: ['25%', '25%', '25%', '25%'],
                body: [
                    [{ text: `Solicitante: ${ordens.solicitante}`, colSpan: 4, fontSize: 9, bold: true }, {}, {}, {}],
                    [{ text: `Defeito Informado: ${ordens.defeito}`, colSpan: 4, fontSize: 9, bold: true }, {}, {}, {}],
                    [{ text: `Acessórios Enviados: ${ordens.acessorios_enviados}`, colSpan: 4, fontSize: 9, bold: true }, {}, {}, {}]
                ]
            }
        },
        {
            style: 'tableExample',
            margin: [0, 5, 0, 10],
            table: {
                headerRows: 1,
                widths: ['25%', '25%', '25%', '25%'],
                body: [
                    [{ text: '', style: 'tableHeader', colSpan: 4 }, { text: 'Header 2', style: 'tableHeader' }, { text: 'Header 3', style: 'tableHeader' }, { text: 'Header 4', style: 'tableHeader' }],
                    [{ text: '', colSpan: 4, fontSize: 9 }, {}, {}, { text: '.' }],
                ]
            },
            layout: 'headerLineOnly'
        },
        {
            style: 'tableExample',
            margin: [0, 5, 0, 10],
            table: {
                headerRows: 1,
                widths: ['25%', '25%', '25%', '25%'],
                body: [
                    [
                        {
                            colSpan: 4, fontSize: 9, bold: true,
                            columns: [
                                {
                                    stack: [
                                        {
                                            columns: [
                                                {
                                                    text: 'Tipo de OS: ',
                                                    // width: '50%',
                                                    margin: [0, 0, 0, 0],
                                                },
                                                {
                                                    image: ordens.tipo_os == 'Corretiva' ? marcado : desmarcado,
                                                    height: 10,
                                                    width: 10,
                                                },
                                                {
                                                    text: ' Corretiva',
                                                    // width: '50%',
                                                    margin: [3, 0, 0, 0],
                                                },
                                                {
                                                    image: ordens.tipo_os == 'Preventiva' ? marcado : desmarcado,
                                                    height: 10,
                                                    width: 10,
                                                },
                                                {
                                                    text: 'Preventiva ',
                                                    // width: '50%',
                                                    margin: [3, 0, 0, 0],
                                                },
                                                {
                                                    image: ordens.tipo_os == 'Treinamento' ? marcado : desmarcado,
                                                    height: 10,
                                                    width: 10,
                                                },
                                                {
                                                    text: 'Treinamento ',
                                                    // width: '50%',
                                                    margin: [3, 0, 0, 0],
                                                }
                                            ],
                                        },
                                    ],
                                    // width: '*',
                                }
                            ]
                        },
                        {},
                        {},
                        {}
                    ],
                    [
                        {
                            colSpan: 4, fontSize: 9, bold: true,
                            columns: [
                                {
                                    stack: [
                                        {
                                            columns: [
                                                {
                                                    text: 'Local do Serviço: ',
                                                    // width: '50%',
                                                    margin: [0, 0, 0, 0],
                                                },
                                                {
                                                    image: ordens.local_servico == 'Interno' ? marcado : desmarcado,
                                                    height: 10,
                                                    width: 10,
                                                    margin: [-45, 0, 0, 0]
                                                },
                                                {
                                                    text: ' Interno',
                                                    // width: '50%',
                                                    margin: [-42, 0, 0, 0],
                                                },
                                                {
                                                    image: ordens.local_servico == 'Externo' ? marcado : desmarcado,
                                                    height: 10,
                                                    width: 10,
                                                    margin: [-89, 0, 0, 0]
                                                },
                                                {
                                                    text: 'Externo ',
                                                    // width: '50%',
                                                    margin: [-86, 0, 0, 0],
                                                }
                                            ],
                                        },
                                    ],
                                    // width: '*',
                                }
                            ],
                        },
                        {},
                        {},
                        {}
                    ],
                    [
                        {
                            colSpan: 4, fontSize: 9, bold: true,
                            columns: [
                                {
                                    stack: [
                                        {
                                            columns: [
                                                {
                                                    text: 'Local do Defeito: ',
                                                    // width: '50%',
                                                    margin: [0, 0, 0, 0],
                                                },
                                                {
                                                    image: ordens.local_defeito == 'Equipamento' ? marcado : desmarcado,
                                                    height: 10,
                                                    width: 10,
                                                },
                                                {
                                                    text: ' Equipamento',
                                                    // width: '50%',
                                                    margin: [3, 0, 0, 0],
                                                },
                                                {
                                                    image: ordens.local_defeito == 'Acessório' ? marcado : desmarcado,
                                                    height: 10,
                                                    width: 10,
                                                },
                                                {
                                                    text: 'Acessório ',
                                                    // width: '50%',
                                                    margin: [3, 0, 0, 0],
                                                },
                                                {
                                                    image: ordens.local_defeito == 'Operação' ? marcado : desmarcado,
                                                    height: 10,
                                                    width: 10,
                                                },
                                                {
                                                    text: 'Operação ',
                                                    // width: '50%',
                                                    margin: [3, 0, 0, 0],
                                                }
                                            ],
                                        },
                                    ],
                                    // width: '*',
                                }
                            ]
                        },
                        {},
                        {},
                        {}
                    ]
                ]
            }
        },
        {
            style: 'tableExample',
            margin: [0, 5, 0, 5],
            table: {
                headerRows: 1,
                widths: ['25%', '25%', '25%', '25%'],
                body: [
                    [{ text: '', style: 'tableHeader', colSpan: 4 }, { text: 'Header 2', style: 'tableHeader' }, { text: 'Header 3', style: 'tableHeader' }, { text: 'Header 4', style: 'tableHeader' }],
                    [{ text: '', colSpan: 4, fontSize: 9 }, {}, {}, { text: '.' }],
                ]
            },
            layout: 'headerLineOnly'
        },
        {
            style: 'tableExample',
            margin: [0, 0, 0, 5],
            table: {
                widths: ['25%', '25%', '25%', '25%'],
                heights: [10, 10, 10, 10],
                body: [
                    [{ text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                    [{ text: `Defeito Constatado: ${ordens.defeito_constatado}`, colSpan: 4, fontSize: 9, bold: true }, {}, {}, { text: '.' }],
                    [{ text: '', colSpan: 4, fontSize: 9 }, {}, {}, { text: '.' }],
                    [{ text: '', colSpan: 4, fontSize: 9 }, {}, {}, { text: '.' }],
                    [{ text: '', colSpan: 4, fontSize: 9 }, {}, {}, { text: '.' }],
                ]
            },
            layout: 'lightHorizontalLines'
        },
        {
            style: 'tableExample',
            margin: [0, 5, 0, 5],
            table: {
                headerRows: 1,
                widths: ['25%', '25%', '25%', '25%'],
                body: [
                    [{ text: '', style: 'tableHeader', colSpan: 4 }, { text: 'Header 2', style: 'tableHeader' }, { text: 'Header 3', style: 'tableHeader' }, { text: 'Header 4', style: 'tableHeader' }],
                    [{ text: '', colSpan: 4, fontSize: 9 }, {}, {}, { text: '.' }],
                ]
            },
            layout: 'headerLineOnly'
        },
        {
            style: 'tableExample',
            margin: [0, 0, 0, 5],
            table: {
                widths: ['25%', '25%', '25%', '25%'],
                heights: [10, 10, 10, 10],
                body: [
                    [{ text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }, { text: '', style: 'tableHeader' }],
                    [{ text: `Serviço Realizado: ${ordens.servico_realizado}`, colSpan: 4, fontSize: 9, bold: true }, {}, {}, { text: '.' }],
                    [{ text: '', colSpan: 4, fontSize: 9 }, {}, {}, { text: '.' }],
                    [{ text: '', colSpan: 4, fontSize: 9 }, {}, {}, { text: '.' }],
                    [{ text: '', colSpan: 4, fontSize: 9 }, {}, {}, { text: '.' }],
                ]
            },
            layout: 'lightHorizontalLines'
        },
        {
            style: 'tableExample',
            margin: [0, 5, 0, 10],
            table: {
                headerRows: 1,
                widths: ['25%', '25%', '25%', '25%'],
                body: [
                    [{ text: '', style: 'tableHeader', colSpan: 4 }, { text: 'Header 2', style: 'tableHeader' }, { text: 'Header 3', style: 'tableHeader' }, { text: 'Header 4', style: 'tableHeader' }],
                    [{ text: '', colSpan: 4, fontSize: 9 }, {}, {}, { text: '.' }],
                ]
            },
            layout: 'headerLineOnly'
        },
        { text: 'Peças e Serviços', style: 'subheader', alignment: 'center', bold: true },
        {
            style: 'tableExample',
            margin: [0, 5, 0, 10],
            table: {
                headerRows: 1,
                widths: ['*', '*', '*', '*', '*', '*', '*', '*'],
                heights: [10, 10, 10, 10, 10, 10, 10, 10],
                body: [
                    [{ text: `Tipo`, colSpan: 1, fontSize: 9, bold: true, alignment: 'center' }, { text: `Descrição`, colSpan: 3, fontSize: 9, bold: true, alignment: 'center' }, {}, {}, { text: `Quantidade`, colSpan: 1, fontSize: 9, bold: true, alignment: 'center' },
                    { text: `Unidade`, colSpan: 1, fontSize: 9, bold: true, alignment: 'center' }, { text: `Valor Unitário`, colSpan: 1, fontSize: 9, bold: true, alignment: 'center' }, { text: `Valor Total`, colSpan: 1, fontSize: 9, bold: true, alignment: 'center' }],

                    [
                        { text: `${ordens.tipo ? ordens.tipo : ''}`, colSpan: 1, fontSize: 9, alignment: 'center' },
                        { text: `${ordens.descricao ? ordens.descricao : ''}`, colSpan: 3, fontSize: 9, alignment: 'center' }, {}, {},
                        { text: `${ordens.quantidade ? ordens.quantidade : ''}`, colSpan: 1, fontSize: 9, alignment: 'center' },
                        { text: `${ordens.unidade_un ? ordens.unidade_un : ''}`, colSpan: 1, fontSize: 9, alignment: 'center' },
                        { text: `${ordens.valor_unit ? ordens.valor_unit.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : ''}`, colSpan: 1, fontSize: 9, alignment: 'center' },
                        { text: `${ordens.valor_total ? ordens.valor_total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : ''}`, colSpan: 1, fontSize: 9, alignment: 'center' }
                    ],
                    [
                        { text: `${ordens.tipo2 ? ordens.tipo2 : ''}`, colSpan: 1, fontSize: 9, alignment: 'center' },
                        { text: `${ordens.descricao2 ? ordens.descricao2 : ''}`, colSpan: 3, fontSize: 9, alignment: 'center' }, {}, {},
                        { text: `${ordens.quantidade2 ? ordens.quantidade2 : ''}`, colSpan: 1, fontSize: 9, alignment: 'center' },
                        { text: `${ordens.unidade_un2 ? ordens.unidade_un2 : ''}`, colSpan: 1, fontSize: 9, alignment: 'center' },
                        { text: `${ordens.valor_unit2 ? ordens.valor_unit2.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : ''}`, colSpan: 1, fontSize: 9, alignment: 'center' },
                        { text: `${ordens.valor_total2 ? ordens.valor_total2.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : ''}`, colSpan: 1, fontSize: 9, alignment: 'center' }
                    ],
                    [
                        { text: `${ordens.tipo3 ? ordens.tipo3 : ''}`, colSpan: 1, fontSize: 9, alignment: 'center' },
                        { text: `${ordens.descricao3 ? ordens.descricao3 : ''}`, colSpan: 3, fontSize: 9, alignment: 'center' }, {}, {},
                        { text: `${ordens.quantidade3 ? ordens.quantidade3 : ''}`, colSpan: 1, fontSize: 9, alignment: 'center' },
                        { text: `${ordens.unidade_un3 ? ordens.unidade_un3 : ''}`, colSpan: 1, fontSize: 9, alignment: 'center' },
                        { text: `${ordens.valor_unit3 ? ordens.valor_unit3.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : ''}`, colSpan: 1, fontSize: 9, alignment: 'center' },
                        { text: `${ordens.valor_total3 ? ordens.valor_total3.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : ''}`, colSpan: 1, fontSize: 9, alignment: 'center' }
                    ],
                    [
                        { text: `${ordens.tipo4 ? ordens.tipo4 : ''}`, colSpan: 1, fontSize: 9, alignment: 'center' },
                        { text: `${ordens.descricao4 ? ordens.descricao4 : ''}`, colSpan: 3, fontSize: 9, alignment: 'center' }, {}, {},
                        { text: `${ordens.quantidade4 ? ordens.quantidade4 : ''}`, colSpan: 1, fontSize: 9, alignment: 'center' },
                        { text: `${ordens.unidade_un4 ? ordens.unidade_un4 : ''}`, colSpan: 1, fontSize: 9, alignment: 'center' },
                        { text: `${ordens.valor_unit4 ? ordens.valor_unit4.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : ''}`, colSpan: 1, fontSize: 9, alignment: 'center' },
                        { text: `${ordens.valor_total4 ? ordens.valor_total4.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : ''}`, colSpan: 1, fontSize: 9, alignment: 'center' }
                    ],
                    [
                        { text: ``, colSpan: 1, fontSize: 9, alignment: 'center' },
                        { text: ``, colSpan: 3, fontSize: 9, alignment: 'center' }, {}, {},
                        { text: ``, colSpan: 1, fontSize: 9, alignment: 'center' },
                        { text: ``, colSpan: 1, fontSize: 9, alignment: 'center' },
                        { text: ``, colSpan: 1, fontSize: 9, alignment: 'center' },
                        { text: ``, colSpan: 1, fontSize: 9, alignment: 'center' }
                    ]
                ]
            }
        },
        {
            style: 'tableExample',
            margin: [0, 5, 0, 10],
            table: {
                headerRows: 1,
                widths: ['25%', '25%', '25%', '25%'],
                body: [
                    [{ text: '', style: 'tableHeader', colSpan: 4 }, { text: 'Header 2', style: 'tableHeader' }, { text: 'Header 3', style: 'tableHeader' }, { text: 'Header 4', style: 'tableHeader' }],
                    [{ text: '', colSpan: 4, fontSize: 9 }, {}, {}, { text: '.' }],
                ]
            },
            layout: 'headerLineOnly'
        },
        {
            style: 'tableExample',
            margin: [0, 5, 0, 10],
            table: {
                headerRows: 1,
                widths: ['25%', '25%', '25%', '25%'],
                body: [
                    [{ text: `Total de Horas: ${ordens.total_horas}`, colSpan: 2, fontSize: 9, bold: true }, {}, { text: `Data do Fechamento: ${replaceDate(ordens.data_fechamento)}`, colSpan: 2, fontSize: 9, bold: true }, {}],
                    [{ text: `Técnico Responsável: ${ordens.tecnico_resp}`, colSpan: 4, fontSize: 9, bold: true }, {}, {}, {}],
                    [{ text: `Situação da OS: Fechado`, colSpan: 4, fontSize: 9, bold: true }, {}, {}, {}],
                    [{ text: `Recebido por: ${ordens.recebido_por}`, colSpan: 4, fontSize: 9, bold: true }, {}, {}, {}],
                    [{ text: `Matrícula: ${ordens.matricula}`, colSpan: 4, fontSize: 9, bold: true }, {}, {}, {}],
                ]
            }
        },
    ];

    function pdfFooter(currentPage, pageCount) {
        return [{
            text: currentPage + '/' + pageCount,
            alignment: 'right',
            fontSize: 9,
            margin: [0, 10, 20, 0]
        }]
    };

    const pdfDefinitions = {
        pageSize: 'A4',
        pageMargins: [30, 20, 30, 40],
        // header: [pdfTitle],
        content: [content],
        footer: pdfFooter
    }

    pdfMake.createPdf(pdfDefinitions).download();

}

export default criarPDF;