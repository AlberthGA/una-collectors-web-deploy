import { Page, Document, Text, PDFDownloadLink,Image,View } from '@react-pdf/renderer'
import { templateStyles } from './TemplateStyles';

export type IRevonacionLicencias = {
  name?: string
  date?: string
  cedula?:string
  adjudicacion: {
    checked: boolean,
    nEmp: number,
  },
  renovacion: {
    checked: boolean,
    nEmp: number,
  }
  footer: {
    despedida: string
  }
}

function obtenerFechaActual(): string {
  const fechaActual = new Date();
  const dia = fechaActual.getDate();
  const mes = fechaActual.getMonth();
  const anio = fechaActual.getFullYear();

  const meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio",
    "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];

  const mesNombre = meses[mes];

  const formatoFecha = `${dia} de ${mesNombre} de ${anio.toString().slice(-2)}`;

  return formatoFecha;
}



const Header = () => (
  <View style={templateStyles.header}>
    <Image
      style={templateStyles.logo}
      src="/icon.png"
    />
    <View>
      <Text style={templateStyles.title}>Municipalidad de Pérez Zeledón</Text>
      <Text style={templateStyles.subtitle}>Cédula Jurídica Nº 3-014-042056</Text>
      <Text style={templateStyles.subtitle}>fecha {obtenerFechaActual()}</Text>
    </View>
  </View>
);

const LocalInformation = () => (
  <View>
    <Text style={templateStyles.label}>Nombre del local:</Text>
    <Text style={templateStyles.textoConBorde}></Text>

    <Text style={templateStyles.label}>Dirección del local:</Text>
    <Text style={templateStyles.textoConBorde} ></Text>

    <Text style={templateStyles.label}>Actividad principal a explotar:</Text>
    <Text style={templateStyles.textoConBorde}></Text>

    <Text style={templateStyles.label}>Otras actividades secundarias:</Text>
    <Text style={templateStyles.textoConBorde} ></Text>

    <Text style={templateStyles.label}>Horario de Funcionamiento:</Text>
    <Text style={templateStyles.textoConBorde} ></Text>

    <Text style={templateStyles.label}>Cantidad de empleados:</Text>
    <Text style={templateStyles.textoConBorde} ></Text>

    <Text style={templateStyles.label}>Teléfono Fax E-MAIL Apartado:</Text>
    <Text style={templateStyles.textoConBorde} ></Text>

    <Text style={templateStyles.label}>Representante legal N° identificación:</Text>
    <Text style={templateStyles.textoConBorde} ></Text>

    <Text style={templateStyles.label}>Propietario de la propiedad N° identificación:</Text>
    <Text style={templateStyles.textoConBorde} ></Text>

    <Text style={templateStyles.label}>
      Sitio idóneo para notificaciones según art. 34, Ley No. 8687 (fax, correo o medio tecnológico):
    </Text>
    <Text style={templateStyles.textoConBorde} ></Text>

    <Text style={templateStyles.label}>Firma y N° del solicitante:</Text>
    <Text style={templateStyles.textoConBorde} ></Text>

  </View>
);
const Footer = ()=> { 

  return (
    <View>
      <Text>
        Nota: En caso de NO indicar medio idóneo conforme la Ley de Notificaciones Judiciales, los documentos emitidos por la administración municipal, quedarán notificados con el transcurso de VEINTICUATRO HORAS de dictado, conforme a lo que expresa el art. 11 de la Ley 8687.
          ---------------------------------------------------------------------------------------------------------------------
          Teléfono: (506) 2220-6698 Fax: (506) 2771-2105
  Correo electrónico: patentes@mpz.go.cr Apartado postal: 274-8000
        </Text>}
    </View>
  );

}


const RevonacionLicencias = (prop: IRevonacionLicencias) => {
  const { name, date, footer, adjudicacion, renovacion , cedula } = prop
  return (
    <Document>
      <Page style={templateStyles.body}>
        <Header/>
        <Text style={templateStyles.title}>
          SOLICITUD DE RENOVACIÓN LICENCIA MUNICIPAL
EXPLOTACIÓN DE CANTERAS O CAUCES DE DOMINIO PÚBLICO
        </Text>
        Por este medio yo,{name}
          cédula N° {cedula},solicito se renueve la(s) licencia(es), con las siguientes características
       <LocalInformation/>
        <Text style={templateStyles.boxText}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, inventore, tempora dolorem esse minima distinctio rerum maiores minus eos eveniet error at quos laborum laudantium in! Quisquam dolorum nemo veritatis?
        </Text>
        {/* FOOTER */}
       <Footer/>
      </Page>
    </Document>
  );
}

export default RevonacionLicencias;