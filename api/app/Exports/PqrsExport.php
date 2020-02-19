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
        ->SELECT('*')
        ->JOIN('neighbors','pqrs.neighbor_id','=','neighbors.id')
        ->JOIN('problem_lists','pqrs.problem_id','=','problem_lists.id')       
        // ->JOIN('infrastructures','pqrs.infrastructure_id','=','infrastructures.id')
        ->get();;
    }
    public function headings(): array
    {
        return [
            'Code',
            'Description',
            'Pos',
            'Mod A',
            'Mod B',
            'Charge',
        ];
    }
}
