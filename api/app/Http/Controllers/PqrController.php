<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Pqr;
class PqrController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Pqr::all();
    }

     /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'surname' => 'required|max:255',
            'in_type' => 'required|max:255',
            'in_code' => 'required|numeric',
            'address' => 'required|max:255',
            'issue' => 'required',
            'lat' => 'required|numeric',
            'long' => 'required|numeric'
        ]);
        return Pqr::create($validatedData);
        //return Pqr::create($request->all());
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
      //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $Pqr = Pqr::findOrFail($id);
        $Pqr->delete();
        return $Pqr;
    }
    
    /**
     * Show the profile for the given Pqr.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        return $Pqr = Pqr::findOrFail($id);
    }
}
