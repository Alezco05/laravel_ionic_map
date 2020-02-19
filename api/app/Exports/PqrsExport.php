<?php

namespace App\Exports;
use DB;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithEvents;

class PqrsExport implements FromCollection, WithHeadings, ShouldAutoSize, WithEvents
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return DB::TABLE('pqrs')
        ->SELECT('pqrs.address','neighbors.name AS neighbor', 'problem_lists.problem AS problem', 'infrastructures.name AS infrastructure', 'pqrs.issue')
        ->JOIN('neighbors','pqrs.neighbor_id','=','neighbors.id')
        ->JOIN('problem_lists','pqrs.problem_id','=','problem_lists.id')       
        ->JOIN('infrastructures','pqrs.infrastructure_id','=','infrastructures.id')
        ->get();
    }
    public function headings(): array
    {
        return [
            'Dirección',
            'Barrio',
            'Tipo de Problema',
            'Tipo de Infraestructura',
            'Descripcion'
        ];
    }
     /**
     * @return array
     */
    public function registerEvents(): array
    {
        return [
            AfterSheet::class    => function(AfterSheet $event) {
                $cellRange = 'A1:E1'; // All headers
                $styleArray = [
                    'font' => [
                        'name'      =>  'Calibri',
                        'size'      =>  16,
                        'bold'      =>  true,
                        'color' => ['argb' => '0E0F0E'],
                    ],
                      //Set background style
                      'fill' => [
                        'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                        'startColor' => [
                            'rgb' => '367fa9',
                         ]           
                    ],
                ];
                
                $event->sheet->getDelegate()->getStyle($cellRange)->applyFromArray($styleArray);
            },
        ];
        
    }
}
