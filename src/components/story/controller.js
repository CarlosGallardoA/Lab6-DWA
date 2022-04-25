/**
 * 
 Vamos a enviarle al cliente el siguiente
 en res podemos el statis res.status(200).json()
  {
    ok: // true || false esto va a indicar y si la peticion es success o error
    data: // Sera el cuerpo de nuestra respuesta esto va a tener un mensaje con los datos o un mensaje de error
  }
 */
import { prisma } from "../../db";

// Listar
// METHOD: GET
export const list = async (req, res) => {
  try {
    const stories = await prisma.story.findMany();

    return res.status(200).json({
      ok: true,
      data: stories,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      data: error.message,
    });
  }
};

// Crear
// METHOD: POST
export const store = async (req, res) => {
  try {
    const story = await prisma.story.create({
      data: { ...req.body },
    });

    return res.status(201).json({
      ok: true,
      data: story,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      data: error.message,
    });
  }
};

// Editar
// METHOD: PUT
export const update = async (req, res) => {
  // edita un story
  try {
    const { id } = req.params;
    const story = await prisma.story.update({
      where: { id: Number(id) },
      data: { ...req.body },
    });
    return res.status(200).json({
      ok: true,
      data: story,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      data: error.message,
    });
  }
};

// Eliminar
// METHOD: DELETE
export const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const story = await prisma.story.delete({
      where: { id: Number(id) },
    });
    return res.status(200).json({
      ok: true,
      data: story,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      data: error.message,
    });
  }
};
