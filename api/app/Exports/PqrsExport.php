<?php

namespace App\Exports;
use DB;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class PqrsExport implements FromCollection, WithHeadings
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
}
