import { Request, Response } from 'express';
import { FileUploadHelper } from '../../../helpers/fileUploadHelper';
import { ICloudinaryResponse, IUploadFile } from '../../../interfaces/file';
import { AuthService } from '../../../shared/axios';

const createStudent = async (req: Request) => {
  const file = req.file as IUploadFile;
  const uploadedImg: ICloudinaryResponse = await FileUploadHelper.uploadToCloudinary(file);

  if (uploadedImg) {
    req.body.profileImg = uploadedImg.secure_url;
  }

  const { academicFaculty, academicSemester, academicDepartment } = req.body.student;
  const academicFacultyResponse = await AuthService.get(
    `/academic-faculties?syncId=${academicFaculty}`
  );

  //   if (academicFacultyResponse.data && Array.isArray(academicFacultyResponse.data)) {
  //     req.body.student.academicDepartment = academicFacultyResponse.data[0].id;
  //   }
  const academicSemesterResponse = await AuthService.get(
    `/academic-semesters?syncId=${academicSemester}`
  );

  //   if (academicSemesterResponse.data && Array.isArray(academicSemesterResponse.data)) {
  //     req.body.student.academicDepartment = academicSemesterResponse.data[0].id;
  //   }
  const academicDepartmentResponse = await AuthService.get(
    `/academic-departments?syncId=${academicDepartment}`
  );

  //   if (academicDepartmentResponse.data && Array.isArray(academicDepartmentResponse.data)) {
  //     req.body.student.academicDepartment = academicDepartmentResponse.data[0].id;
  //   }

  console.log('faculty', academicFacultyResponse);
  console.log('department', academicDepartmentResponse);
  console.log('semester', academicSemesterResponse);
};

export const UserService = {
  createStudent
};
