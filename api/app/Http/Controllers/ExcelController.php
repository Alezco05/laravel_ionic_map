<?php

namespace App\Http\Controllers;

use Maatwebsite\Excel\Facades\Excel;
use DB;
use Illuminate\Http\Request;

class ExcelController extends Controller
{
  /*  public static function setGeneral($data, $sheet)
    {
        $sheet->cell('A1', function($cell){
            $cell->setValue("BARRIO");
            $cell->setAlignment("center");
            $cell->setBorder("thin","thin","thin","thin");
            $cell->setFontWeight("bold");
            $cell->setBackground('#367fa9');
        });

        $sheet->cell('B2', function($cell){
            $cell->setValue("TIPO DE INFRAESTRUCTURA");
            $cell->setAlignment("center");
            $cell->setBorder("thin","thin","thin","thin");
            $cell->setFontWeight("bold");
            $cell->setBackground('#36B6EE');
        });
        $sheet->cell('C2', function($cell){
            $cell->setValue("TIPO DE PROBLEMA");
            $cell->setAlignment("center");
            $cell->setBorder("thin","thin","thin","thin");
            $cell->setFontWeight("bold");
            $cell->setBackground('#36B6EE');
        });
        $sheet->cell('D2', function($cell){
            $cell->setValue("DIRECCION");
            $cell->setAlignment("center");
            $cell->setBorder("thin","thin","thin","thin");
            $cell->setFontWeight("bold");
            $cell->setBackground('#36B6EE');
        });
        $sheet->cell('E2', function($cell){
            $cell->setValue("DESCRIPCION");
            $cell->setAlignment("center");
            $cell->setBorder("thin","thin","thin","thin");
            $cell->setFontWeight("bold");
            $cell->setBackground('#36B6EE');
        });
        $ini = 2;
        foreach ($data as $key => $value) {
            $sheet->cell('A'.$ini, function($cell) use ($value) {
                $cell->setValue($value->neighbor);
                $cell->setAlignment("center");
                $cell->setBorder("thin","thin","thin","thin");
            });
            $sheet->cell('B'.$ini, function($cell) use ($value) {
                $cell->setValue($value->infrastructure);
                $cell->setAlignment("center");
                $cell->setBorder("thin","thin","thin","thin");
            });
            $sheet->cell('C'.$ini, function($cell) use ($value) {
                $cell->setValue($value->problem);
                $cell->setAlignment("center");
                $cell->setBorder("thin","thin","thin","thin");
            });
            $sheet->cell('D'.$ini, function($cell) use ($value) {
                $cell->setValue($value->address);
                $cell->setAlignment("center");
                $cell->setBorder("thin","thin","thin","thin");
            });
            $sheet->cell('E'.$ini, function($cell) use ($value) {
                $cell->setValue($value->issue);
                $cell->setAlignment("center");
                $cell->setBorder("thin","thin","thin","thin");
            });
            $ini = $ini + 1;
        }
    }*/
    /*
    public static function generarExcel(Request $request)
    {
      $data = DB::TABLE('pqrs')
        ->SELECT('neighbors.name AS neighbor', 'problem_lists.problem AS problem', 'infrastructures.name AS infrastructure', 'pqrs.address', 'pqrs.issue')
        ->JOIN('neighbors','pqrs.neighbor_id','=','neighbors.id')
        ->JOIN('problem_lists','pqrs.problem_id','=','problem_lists.id')       
        ->JOIN('infrastructures','pqrs.infrastructure_id','=','infrastructures.id')
        ->get(); 
        $data = '';
        Excel::create('REPORTE', function($excel) use($data) {
     $excel->sheet('GENERAL', function($sheet) use($data) {
                ExcelController::setGeneral($data, $sheet);
            });
        $excel->setActiveSheetIndex(0);
        $excel->setTitle('Estadisiticas registros');
        $excel->setCreator('System');
        $excel->setDescription('Este archivo contiene los registros en la base de datos');
    })->export('xls');
} */
public function collection()
    {
      
    }
}
